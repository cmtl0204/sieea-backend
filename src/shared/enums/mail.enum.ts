import { join } from 'path';

export enum MailEnum {
  PG_DATA_SOURCE = 'PG_DATA_SOURCE',
}

export enum MailSubjectEnum {
  RESET_PASSWORD = 'Solicitud de Restablecimiento de Contraseña',
  ACCEPT_TERMS_CONDITIONS = 'Bienvenida al Sistema Informático Ecuatorianos en Acción',
}

export enum MailTemplateEnum {
  TEST = 'test',
  TRANSACTIONAL_CODE = 'auth/transactional-code',
  ACCEPT_TERMS_CONDITIONS = 'auth/accept-terms-conditions',
}
