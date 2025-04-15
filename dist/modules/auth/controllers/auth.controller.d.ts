import { AuthService } from '@auth/services';
import { UserEntity } from '@auth/entities';
import { LoginDto, PasswordChangeDto, UpdateProfileDto, UpdateUserInformationDto } from '@auth/dto';
import { ResponseHttpModel } from '@shared/interfaces';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(payload: LoginDto): Promise<ResponseHttpModel>;
    changePassword(id: string, payload: PasswordChangeDto): Promise<ResponseHttpModel>;
    findProfile(user: UserEntity): Promise<ResponseHttpModel>;
    findUserInformation(user: UserEntity): Promise<ResponseHttpModel>;
    updateProfile(user: UserEntity, payload: UpdateProfileDto): Promise<ResponseHttpModel>;
    updateUserInformation(id: string, payload: UpdateUserInformationDto): Promise<ResponseHttpModel>;
    refreshToken(user: UserEntity): {
        data: any;
        message: string;
        title: string;
    };
    requestTransactionalCode(username: string): Promise<ResponseHttpModel>;
    requestTransactionalCodeEmail(user: UserEntity, email: string): Promise<ResponseHttpModel>;
    verifyTransactionalCode(token: string, username: string): Promise<ResponseHttpModel>;
    resetPassword(payload: any): Promise<ResponseHttpModel>;
    uploadAvatar(avatar: Express.Multer.File, id: string): Promise<ResponseHttpModel>;
    verifyRecaptcha(token: string): Promise<ResponseHttpModel>;
    verifyIdentification(identification: string): Promise<ResponseHttpModel>;
    signInByValidationIdentification(identification: string): Promise<ResponseHttpModel>;
    migrateEEA(): Promise<{
        data: null;
        message: string;
        title: string;
    }>;
    consultaRegistroCivil(): Promise<{
        data: null;
        message: string;
        title: string;
    }>;
    acceptTermsConditions(user: UserEntity): Promise<ResponseHttpModel>;
    rejectTermsConditions(user: UserEntity): Promise<ResponseHttpModel>;
}
