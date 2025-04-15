import { UserDto } from '@auth/dto';
declare const UpdateProfileDto_base: import("@nestjs/common").Type<Pick<UserDto, "name" | "bloodType" | "ethnicOrigin" | "gender" | "identificationType" | "maritalStatus" | "sex" | "avatar" | "birthdate" | "identification" | "lastname">>;
export declare class UpdateProfileDto extends UpdateProfileDto_base {
}
export {};
