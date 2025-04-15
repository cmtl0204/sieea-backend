import { Strategy } from 'passport-jwt';
import { config } from '@config';
import { ConfigType } from '@nestjs/config';
import { PayloadTokenModel } from '@auth/models';
import { UserEntity } from '@auth/entities';
import { UsersService } from '../services/users.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UsersService, configService: ConfigType<typeof config>);
    validate(payload: PayloadTokenModel): Promise<UserEntity>;
}
export {};
