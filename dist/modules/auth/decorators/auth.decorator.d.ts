import { RoleEnum } from '@auth/enums';
export declare function Auth(...roles: RoleEnum[]): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
