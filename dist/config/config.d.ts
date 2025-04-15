export declare const config: (() => {
    database: {
        database: string | undefined;
        host: string | undefined;
        password: string | undefined;
        port: number;
        schemaAuth: string | undefined;
        schemaCore: string | undefined;
        username: string | undefined;
    };
    mail: {
        host: string | undefined;
        port: number;
        user: string | undefined;
        pass: string | undefined;
        from: string | undefined;
        fromName: string | undefined;
    };
    apiKey: string | undefined;
    jwtSecret: string | undefined;
    recaptchaSiteSecret: string | undefined;
    port: number;
    appUrl: string | undefined;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    database: {
        database: string | undefined;
        host: string | undefined;
        password: string | undefined;
        port: number;
        schemaAuth: string | undefined;
        schemaCore: string | undefined;
        username: string | undefined;
    };
    mail: {
        host: string | undefined;
        port: number;
        user: string | undefined;
        pass: string | undefined;
        from: string | undefined;
        fromName: string | undefined;
    };
    apiKey: string | undefined;
    jwtSecret: string | undefined;
    recaptchaSiteSecret: string | undefined;
    port: number;
    appUrl: string | undefined;
}>;
