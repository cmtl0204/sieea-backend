"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const _config_1 = require("../../config");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
const providers_1 = require("./providers");
const database_module_1 = require("../../database/database.module");
const menus_controller_1 = require("./controllers/menus.controller");
const users_service_1 = require("./services/users.service");
const strategies_1 = require("./strategies");
const core_1 = require("@nestjs/core");
const guards_1 = require("./guards");
const mail_module_1 = require("../common/mail/mail.module");
const axios_1 = require("@nestjs/axios");
const additional_information_controller_1 = require("./controllers/additional-information.controller");
const additional_information_service_1 = require("./services/additional-information.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            database_module_1.DatabaseModule,
            mail_module_1.MailModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                inject: [_config_1.config.KEY],
                useFactory: (configService) => {
                    return {
                        secret: configService.jwtSecret,
                        signOptions: {
                            expiresIn: '24h',
                        },
                    };
                },
            }),
        ],
        controllers: [
            controllers_1.AuthController,
            menus_controller_1.MenusController,
            controllers_1.RolesController,
            controllers_1.UsersController,
            additional_information_controller_1.AdditionalInformationController,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: guards_1.JwtGuard,
            },
            ...providers_1.authProviders,
            services_1.AuditsService,
            services_1.AuthService,
            services_1.RolesService,
            users_service_1.UsersService,
            services_1.MenusService,
            strategies_1.JwtStrategy,
            additional_information_service_1.AdditionalInformationService,
        ],
        exports: [
            ...providers_1.authProviders,
            users_service_1.UsersService,
            services_1.RolesService,
            services_1.MenusService,
            services_1.AuditsService,
            jwt_1.JwtModule,
            passport_1.PassportModule,
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map