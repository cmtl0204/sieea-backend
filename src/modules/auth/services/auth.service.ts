import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';
import * as Bcrypt from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { IsNull, Repository } from 'typeorm';
import { add, isBefore } from 'date-fns';
import { UserEntity, TransactionalCodeEntity } from '@auth/entities';
import { PayloadTokenModel } from '@auth/models';
import {
  AuthRepositoryEnum,
  CoreRepositoryEnum,
  MailSubjectEnum,
  MailTemplateEnum,
} from '@shared/enums';
import {
  LoginDto,
  PasswordChangeDto,
  ReadProfileDto,
  ReadUserInformationDto,
  UpdateProfileDto,
  UpdateUserInformationDto,
} from '@auth/dto';
import { ServiceResponseHttpModel } from '@shared/interfaces';
import { MailService } from '@modules/common/mail/mail.service';
import { config } from '@config';
import { ConfigType } from '@nestjs/config';
import { MailDataInterface } from '@modules/common/mail/interfaces/mail-data.interface';
import { UsersService } from './users.service';
import axios from 'axios';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { AdditionalInformationEntity } from '@auth/entities/additional-information.entity';
import { ActivityEntity } from '@modules/core/activity/activity.entity';
import { SignInDto } from '@auth/dto/auth/sign-in.dto';

@Injectable()
export class AuthService {
  private readonly MAX_ATTEMPTS = 3;

  constructor(
    @Inject(AuthRepositoryEnum.USER_REPOSITORY)
    private repository: Repository<UserEntity>,
    @Inject(AuthRepositoryEnum.TRANSACTIONAL_CODE_REPOSITORY)
    private transactionalCodeRepository: Repository<TransactionalCodeEntity>,
    @Inject(AuthRepositoryEnum.ADDITIONAL_INFORMATION_REPOSITORY)
    private readonly repositoryAdditionalInformation: Repository<AdditionalInformationEntity>,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private readonly userService: UsersService,
    private jwtService: JwtService,
    private readonly nodemailerService: MailService,
    private readonly httpService: HttpService,
  ) {}

  async changePassword(
    id: string,
    payload: PasswordChangeDto,
  ): Promise<boolean> {
    const user = await this.repository.findOne({
      select: {
        id: true,
        identification: true,
        lastname: true,
        name: true,
        maxAttempts: true,
        password: true,
        suspendedAt: true,
        username: true,
      },
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(
        'Usuario no encontrado para cambio de contraseña',
      );
    }

    const isMatchPassword = await this.checkPassword(
      payload.passwordOld,
      user,
      false,
    );

    if (!isMatchPassword) {
      throw new BadRequestException('La contraseña anterior no coincide.');
    }

    if (payload.passwordConfirmation !== payload.passwordNew) {
      throw new BadRequestException('Las contraseñas no coinciden.');
    }

    await this.repository.update(user.id, {
      password: Bcrypt.hashSync(payload.passwordNew, 10),
    });

    return true;
  }

  async signIn(payload: SignInDto): Promise<ServiceResponseHttpModel> {
    const user: UserEntity | null = await this.repository.findOne({
      select: {
        id: true,
        identification: true,
        lastname: true,
        name: true,
        maxAttempts: true,
        password: true,
        suspendedAt: true,
        username: true,
      },
      where: {
        username: payload.username,
      },
      relations: {
        roles: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException({
        error: 'Sin Autorización',
        message: 'Usuario y/o contraseña no válidos',
      });
    }

    if (user?.suspendedAt)
      throw new UnauthorizedException({
        error: 'Cuenta Suspendida',
        message: 'Su usuario se encuentra suspendido',
      });

    if (payload.username.includes('@turismo.gob.ec')) {
      if (!(await this.signInLDAP(payload)))
        throw new UnauthorizedException({
          error: 'Sin Autorización',
          message: 'Usuario y/o contraseña no válidos',
        });
    }

    if (!payload.username.includes('@turismo.gob.ec')) {
      if (user?.maxAttempts === 0)
        throw new UnauthorizedException({
          error: 'Sin Autorización',
          message: 'Ha excedido el número máximo de intentos permitidos',
        });

      if (!(await this.checkPassword(payload.password, user))) {
        throw new UnauthorizedException(
          `Usuario y/o contraseña no válidos, ${user.maxAttempts - 1} intentos restantes`,
        );
      }
    }
    const { password, suspendedAt, maxAttempts, roles, ...userRest } = user;

    await this.repository.update(user.id, { activatedAt: new Date() });

    return {
      data: {
        accessToken: await this.generateJwt(user),
        auth: userRest,
        roles,
      },
    };
  }

  async signInLDAP(payload: SignInDto): Promise<boolean> {
    const url = `${this.configService.urlLDAP}/${payload.username.split('@')[0]}/${payload.password}`;

    const response = await lastValueFrom(this.httpService.get(url));

    return response.data.data;
  }

  async findProfile(id: string): Promise<ServiceResponseHttpModel> {
    const user = await this.repository.findOne({
      select: {
        id: true,
        identification: true,
        lastname: true,
        name: true,
        maxAttempts: true,
        password: true,
        suspendedAt: true,
        username: true,
      },
      where: {
        id,
      },
      relations: {
        roles: true,
        identificationType: true,
      },
    });

    if (!user) {
      throw new NotFoundException('El perfil no existe');
    }

    return {
      data: {
        user: user,
      },
    };
  }

  async findUserInformation(id: string): Promise<ReadUserInformationDto> {
    const user = await this.repository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('Información de usuario no existe');
    }

    return plainToInstance(ReadUserInformationDto, user);
  }

  async updateUserInformation(
    id: string,
    payload: UpdateUserInformationDto,
  ): Promise<ReadUserInformationDto> {
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new NotFoundException(
        'Usuario no encontrado para actualizar información',
      );
    }

    this.repository.merge(user, payload);
    const userUpdated = await this.repository.save(user);

    return plainToInstance(ReadUserInformationDto, userUpdated);
  }

  async updateProfile(
    id: string,
    payload: UpdateProfileDto,
  ): Promise<ReadProfileDto> {
    const user = await this.repository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(
        'Usuario no encontrado para actualizar el perfil',
      );
    }

    const profileUpdated = await this.repository.update(id, payload);

    return plainToInstance(ReadProfileDto, profileUpdated);
  }

  refreshToken(user: UserEntity): ServiceResponseHttpModel {
    const accessToken = this.generateJwt(user);

    return { data: { accessToken, user } };
  }

  async requestTransactionalCode(
    username: string,
  ): Promise<ServiceResponseHttpModel> {
    const user = await this.repository.findOne({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException({
        error: 'Usuario no encontrado para generar código transaccional',
        message: 'Intente de nuevo',
      });
    }
    const randomNumber = Math.random();
    const token = randomNumber.toString().substring(2, 8);

    const mailData: MailDataInterface = {
      to: user.email || user.personalEmail,
      subject: MailSubjectEnum.RESET_PASSWORD,
      template: MailTemplateEnum.TRANSACTIONAL_CODE,
      data: {
        token,
        user,
      },
    };

    await this.nodemailerService.sendMail(mailData);

    const payload = { username: user.username, token, type: 'password_reset' };

    await this.transactionalCodeRepository.save(payload);

    const value = user.email || user.personalEmail;
    const chars = 3; // Cantidad de caracters visibles

    const email = value.replace(
      /[a-z0-9\-_.]+@/gi,
      (c) =>
        c.substr(0, chars) +
        c
          .split('')
          .slice(chars, -1)
          .map((v) => '*')
          .join('') +
        '@',
    );

    return { data: email };
  }

  async requestTransactionalEmailCode(
    user: UserEntity,
    email: string,
  ): Promise<ServiceResponseHttpModel> {
    const randomNumber = Math.random();
    const token = randomNumber.toString().substring(2, 8);

    const mailData: MailDataInterface = {
      to: email,
      subject: MailSubjectEnum.RESET_EMAIL,
      template: MailTemplateEnum.TRANSACTIONAL_EMAIL_CODE,
      data: {
        token,
        user,
      },
    };

    await this.nodemailerService.sendMail(mailData);

    const payload = { username: email, token, type: 'email_reset' };

    await this.transactionalCodeRepository.save(payload);

    const value = email;
    const chars = 3; // Cantidad de caracters visibles

    const emailMask = value.replace(
      /[a-z0-9\-_.]+@/gi,
      (c) =>
        c.substr(0, chars) +
        c
          .split('')
          .slice(chars, -1)
          .map((v) => '*')
          .join('') +
        '@',
    );

    return { data: emailMask };
  }

  async verifyTransactionalCode(
    token: string,
    username: string,
  ): Promise<ServiceResponseHttpModel> {
    const transactionalCode = await this.transactionalCodeRepository.findOne({
      where: { token },
    });

    if (!transactionalCode) {
      throw new BadRequestException({
        message: 'Código Transaccional no válido',
        error: 'Error',
      });
    }

    if (transactionalCode.username !== username) {
      throw new BadRequestException({
        message: 'El usuario no corresponde al código transaccional generado',
        error: 'Error',
      });
    }

    if (transactionalCode.isUsed) {
      throw new BadRequestException({
        message: 'El código ya fue usado',
        error: 'Error',
      });
    }

    const maxDate = add(transactionalCode.createdAt, { minutes: 10 });

    if (isBefore(maxDate, new Date())) {
      throw new BadRequestException({
        message: 'El código ha expirado',
        error: 'Error',
      });
    }

    transactionalCode.isUsed = true;

    await this.transactionalCodeRepository.save(transactionalCode);

    return { data: true };
  }

  async resetPassword(payload: any): Promise<ServiceResponseHttpModel> {
    const user = await this.repository.findOne({
      where: { username: payload.username },
    });

    if (!user) {
      throw new NotFoundException({
        message: 'Intente de nuevo',
        error: 'Usuario no encontrado para resetear contraseña',
      });
    }

    // user.maxAttempts = this.MAX_ATTEMPTS;
    // user.password = payload.passwordNew;
    // user.passwordChanged = true;

    await this.repository.update(user.id, {
      maxAttempts: this.MAX_ATTEMPTS,
      password: Bcrypt.hashSync(payload.passwordNew, 10),
      passwordChanged: true,
    });

    return { data: true };
  }

  async uploadAvatar(
    file: Express.Multer.File,
    id: string,
  ): Promise<UserEntity> {
    const entity = await this.repository.findOne({
      select: {
        id: true,
        avatar: true,
      },
      where: { id: id },
    });

    if (entity?.avatar) entity.avatar = `avatars/${file.filename}`;

    return await this.repository.save({ ...entity });
  }

  private async generateJwt(user: UserEntity): Promise<string> {
    const expiresDate = new Date();
    //
    expiresDate.setDate(expiresDate.getSeconds() + 10);

    const payload: PayloadTokenModel = { id: user.id, username: user.username };

    return await this.jwtService.signAsync(payload);
  }

  private async findByUsername(username: string): Promise<UserEntity> {
    return (await this.repository.findOne({
      where: {
        username,
      },
    })) as UserEntity;
  }

  private async checkPassword(
    passwordCompare: string,
    user: UserEntity,
    reduceAttempts = true,
  ): Promise<boolean> {
    const { password, ...userRest } = user;
    const isMatch = Bcrypt.compareSync(passwordCompare, password);

    if (isMatch) {
      await this.repository.update(user.id, { maxAttempts: this.MAX_ATTEMPTS });
      return true;
    }

    if (reduceAttempts) {
      await this.repository.update(userRest.id, {
        maxAttempts: userRest.maxAttempts > 0 ? userRest.maxAttempts - 1 : 0,
      });
    }

    return false;
  }

  async verifyRecaptcha(token: string): Promise<any> {
    const response = await axios.post<any>(
      `https://www.google.com/recaptcha/api/siteverify?secret=${this.configService.recaptchaSiteSecret}&response=${token}`,
    );

    return {
      success: response.data.success,
      score: response.data.score,
    };
  }

  async verifyIdentification2(identification: string) {
    const user = await this.repository.findOneBy({ username: identification });

    if (!user) {
      throw new NotFoundException({
        message:
          'Su número de cédula no se encuentra registrado en nuestro sistema',
        error: 'Cédula no encontrado',
      });
    }

    const url = `http://192.168.20.22:8080/servicio-rest-dinardap-v2-1/rest/dinardap/registro-civil/${identification}`;

    const { data } = await firstValueFrom(
      this.httpService.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );

    return data;
  }

  async verifyIdentification(identification: string) {
    const additionalInformation =
      await this.repositoryAdditionalInformation.findOne({
        where: { cedula: identification },
        select: {
          cedula: true,
          fechaEmision: true,
          fechaExpiracion: true,
          nombres: true,
        },
      });

    if (!additionalInformation) {
      throw new NotFoundException({
        message:
          'Su número de cédula no se encuentra registrado en nuestro sistema',
        error: 'Cédula no encontrado',
      });
    }

    return { data: additionalInformation };
  }

  async signInByValidationIdentification(username: string) {
    const user: UserEntity | null = await this.repository.findOne({
      select: {
        id: true,
        identification: true,
        lastname: true,
        name: true,
        suspendedAt: true,
        username: true,
        termsConditions: true,
      },
      where: {
        username,
      },
      relations: {
        roles: true,
        additionalInformation: true,
      },
    });

    if (!user) {
      throw new NotFoundException({
        message:
          'Su número de cédula no se encuentra registrado en nuestro sistema',
        error: 'Cédula no encontrado',
      });
    }

    if (user?.suspendedAt)
      throw new UnauthorizedException({
        error: 'Cuenta Suspendida',
        message: 'Su usuario se encuentra suspendido',
      });

    const { suspendedAt, additionalInformation, roles, ...userRest } = user;

    await this.repository.update(user.id, { activatedAt: new Date() });

    return {
      data: {
        accessToken: await this.generateJwt(user),
        auth: userRest,
        roles,
        additionalInformation,
      },
    };
  }

  async migrateEEA() {
    const additionalInformations =
      await this.repositoryAdditionalInformation.find({ take: 10 });

    for (const item of additionalInformations) {
      let user = await this.repository.findOneBy({
        identification: item.cedula,
      });

      if (!user) {
        user = this.repository.create();

        user.username = item.cedula;
        user.identification = item.cedula;
        user.email = item.correo;
        user.name = item.nombres;
        user.password = item.cedula;

        const userCreated = await this.repository.save(user);

        item.userId = userCreated.id;

        await this.repositoryAdditionalInformation.save(item);
      }
    }

    return { data: null };
  }

  async consultaRegistroCivil() {
    let cedulaError = '';

    const additionalInformations =
      await this.repositoryAdditionalInformation.find({
        where: { fechaEmision: IsNull() },
        take: 500,
      });

    let i = 0;
    for (const item of additionalInformations) {
      cedulaError = item.cedula;
      const url = `http://192.168.20.22:8080/servicio-rest-dinardap-v2-1/rest/dinardap/registro-civil/${item.cedula}`;

      const { data } = await firstValueFrom(
        this.httpService.get(url, {
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      );

      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (data && data.data && (!item.fechaExpiracion || !item.fechaEmision)) {
        item.fechaEmision = data.data.fechaExpedicion;
        item.fechaExpiracion = data.data.fechaExpiracion;
        await this.repositoryAdditionalInformation.save(item);
      }
    }

    return { data: null };
  }

  async acceptTermsConditions(user: UserEntity) {
    user.termsConditions = true;

    const mailData: MailDataInterface = {
      to: user.email,
      subject: MailSubjectEnum.ACCEPT_TERMS_CONDITIONS,
      template: MailTemplateEnum.ACCEPT_TERMS_CONDITIONS,
      data: {
        user,
      },
    };

    await this.nodemailerService.sendMail(mailData);

    return await this.repository.save(user);
  }

  async rejectTermsConditions(user: UserEntity) {
    user.termsConditions = false;

    return await this.repository.save(user);
  }
}
