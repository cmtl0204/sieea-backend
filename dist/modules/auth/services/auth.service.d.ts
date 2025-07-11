import { HttpService } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { UserEntity, TransactionalCodeEntity } from '@auth/entities';
import { PasswordChangeDto, ReadProfileDto, ReadUserInformationDto, UpdateProfileDto, UpdateUserInformationDto } from '@auth/dto';
import { ServiceResponseHttpModel } from '@shared/interfaces';
import { MailService } from '@modules/common/mail/mail.service';
import { config } from '@config';
import { ConfigType } from '@nestjs/config';
import { UsersService } from './users.service';
import { AdditionalInformationEntity } from '@auth/entities/additional-information.entity';
import { SignInDto } from '@auth/dto/auth/sign-in.dto';
export declare class AuthService {
    private repository;
    private transactionalCodeRepository;
    private readonly repositoryAdditionalInformation;
    private configService;
    private readonly userService;
    private jwtService;
    private readonly nodemailerService;
    private readonly httpService;
    private readonly MAX_ATTEMPTS;
    constructor(repository: Repository<UserEntity>, transactionalCodeRepository: Repository<TransactionalCodeEntity>, repositoryAdditionalInformation: Repository<AdditionalInformationEntity>, configService: ConfigType<typeof config>, userService: UsersService, jwtService: JwtService, nodemailerService: MailService, httpService: HttpService);
    changePassword(id: string, payload: PasswordChangeDto): Promise<boolean>;
    signIn(payload: SignInDto): Promise<ServiceResponseHttpModel>;
    signInLDAP(payload: SignInDto): Promise<boolean>;
    findProfile(id: string): Promise<ServiceResponseHttpModel>;
    findUserInformation(id: string): Promise<ReadUserInformationDto>;
    updateUserInformation(id: string, payload: UpdateUserInformationDto): Promise<ReadUserInformationDto>;
    updateProfile(id: string, payload: UpdateProfileDto): Promise<ReadProfileDto>;
    refreshToken(user: UserEntity): ServiceResponseHttpModel;
    requestTransactionalCode(username: string): Promise<ServiceResponseHttpModel>;
    requestTransactionalEmailCode(user: UserEntity, email: string): Promise<ServiceResponseHttpModel>;
    verifyTransactionalCode(token: string, username: string): Promise<ServiceResponseHttpModel>;
    resetPassword(payload: any): Promise<ServiceResponseHttpModel>;
    uploadAvatar(file: Express.Multer.File, id: string): Promise<UserEntity>;
    private generateJwt;
    private findByUsername;
    private checkPassword;
    verifyRecaptcha(token: string): Promise<any>;
    verifyIdentification2(identification: string): Promise<any>;
    verifyIdentification(identification: string): Promise<{
        data: AdditionalInformationEntity;
    }>;
    signInByValidationIdentification(username: string): Promise<{
        data: {
            accessToken: string;
            auth: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date;
                address: import("../entities/address.entity").AddressEntity;
                bloodType: import("../../common/catalogue/catalogue.entity").CatalogueEntity;
                bloodTypeId: string;
                ethnicOrigin: import("../../common/catalogue/catalogue.entity").CatalogueEntity;
                ethnicOriginId: string;
                gender: import("../../common/catalogue/catalogue.entity").CatalogueEntity;
                genderId: string;
                identificationType: import("../../common/catalogue/catalogue.entity").CatalogueEntity;
                identificationTypeId: string;
                maritalStatus: import("../../common/catalogue/catalogue.entity").CatalogueEntity;
                maritalStatusId: string;
                nationality: import("../../common/catalogue/catalogue.entity").CatalogueEntity;
                nationalityId: string;
                sex: import("../../common/catalogue/catalogue.entity").CatalogueEntity;
                sexId: string;
                activatedAt: Date;
                avatar: string;
                cellPhone: string;
                email: string;
                birthdate: Date;
                emailVerifiedAt: Date;
                identification: string;
                lastname: string;
                password: string;
                passwordChanged: boolean;
                personalEmail: string;
                phone: string;
                maxAttempts: number;
                name: string;
                username: string;
                termsConditions: boolean;
            };
            roles: import("@auth/entities").RoleEntity[];
            additionalInformation: AdditionalInformationEntity;
        };
    }>;
    migrateEEA(): Promise<{
        data: null;
    }>;
    consultaRegistroCivil(): Promise<{
        data: null;
    }>;
    acceptTermsConditions(user: UserEntity): Promise<UserEntity>;
    rejectTermsConditions(user: UserEntity): Promise<UserEntity>;
}
