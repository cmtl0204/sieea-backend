"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config_1 = require("@nestjs/config");
const process = require("node:process");
exports.config = (0, config_1.registerAs)('config', () => {
    return {
        database: {
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            password: process.env.DB_PASSWORD,
            port: parseInt(process.env.DB_PORT, 10),
            schemaAuth: process.env.DB_SCHEMA_AUTH,
            schemaCore: process.env.DB_SCHEMA_CORE,
            username: process.env.DB_USER,
        },
        mail: {
            host: process.env.MAIL_HOST,
            port: parseInt(process.env.MAIL_PORT, 10),
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            from: process.env.MAIL_FROM_ADDRESS,
            fromName: process.env.MAIL_FROM_NAME,
        },
        apiKey: process.env.API_KEY,
        jwtSecret: process.env.JWT_SECRET,
        recaptchaSiteSecret: process.env.RECAPTCHA_SITE_SECRET,
        port: parseInt(process.env.PORT, 10),
        appUrl: process.env.APP_URL,
    };
});
//# sourceMappingURL=config.js.map