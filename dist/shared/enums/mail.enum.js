"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailTemplateEnum = exports.MailSubjectEnum = exports.MailEnum = void 0;
var MailEnum;
(function (MailEnum) {
    MailEnum["PG_DATA_SOURCE"] = "PG_DATA_SOURCE";
})(MailEnum || (exports.MailEnum = MailEnum = {}));
var MailSubjectEnum;
(function (MailSubjectEnum) {
    MailSubjectEnum["RESET_PASSWORD"] = "Solicitud de Restablecimiento de Contrase\u00F1a";
    MailSubjectEnum["RESET_EMAIL"] = "Solicitud de Restablecimiento de Correo";
    MailSubjectEnum["ACCEPT_TERMS_CONDITIONS"] = "Bienvenida al Sistema Inform\u00E1tico Ecuatorianos en Acci\u00F3n";
})(MailSubjectEnum || (exports.MailSubjectEnum = MailSubjectEnum = {}));
var MailTemplateEnum;
(function (MailTemplateEnum) {
    MailTemplateEnum["TEST"] = "test";
    MailTemplateEnum["TRANSACTIONAL_CODE"] = "auth/transactional-code";
    MailTemplateEnum["TRANSACTIONAL_EMAIL_CODE"] = "auth/transactional-email-code";
    MailTemplateEnum["ACCEPT_TERMS_CONDITIONS"] = "auth/accept-terms-conditions";
})(MailTemplateEnum || (exports.MailTemplateEnum = MailTemplateEnum = {}));
//# sourceMappingURL=mail.enum.js.map