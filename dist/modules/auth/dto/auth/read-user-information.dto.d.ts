import { UserDto } from '@auth/dto';
declare const ReadUserInformationDto_base: import("@nestjs/common").Type<Pick<UserDto, "email" | "emailVerifiedAt" | "phone" | "username">>;
export declare class ReadUserInformationDto extends ReadUserInformationDto_base {
}
export {};
