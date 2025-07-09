import { UserDto } from '@auth/dto';
declare const SeedUserDto_base: import("@nestjs/common").Type<Pick<UserDto, "name" | "roles" | "identificationType" | "cellPhone" | "email" | "birthdate" | "identification" | "lastname" | "password" | "passwordChanged" | "personalEmail" | "username" | "careers">>;
export declare class SeedUserDto extends SeedUserDto_base {
}
export {};
