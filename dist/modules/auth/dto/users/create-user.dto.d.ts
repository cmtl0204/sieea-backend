import { UserDto } from '@auth/dto';
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<UserDto, "roles" | "name" | "identificationType" | "email" | "identification" | "lastname" | "password" | "passwordChanged" | "username">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
export {};
