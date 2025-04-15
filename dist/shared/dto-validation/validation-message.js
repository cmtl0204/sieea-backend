"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStringValidationOptions = isStringValidationOptions;
exports.minLengthValidationOptions = minLengthValidationOptions;
exports.isNotEmptyValidationOptions = isNotEmptyValidationOptions;
exports.isEmptyValidationOptions = isEmptyValidationOptions;
exports.maxLengthValidationOptions = maxLengthValidationOptions;
exports.isEnumValidationOptions = isEnumValidationOptions;
exports.isEmailValidationOptions = isEmailValidationOptions;
exports.isBooleanValidationOptions = isBooleanValidationOptions;
exports.isNumberValidationOptions = isNumberValidationOptions;
exports.isDateValidationOptions = isDateValidationOptions;
exports.isUrlValidationOptions = isUrlValidationOptions;
exports.minValidationOptions = minValidationOptions;
exports.maxValidationOptions = maxValidationOptions;
function isStringValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser una cadena',
    };
}
function minLengthValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser mayor o igual a $constraint1 caracteres',
    };
}
function isNotEmptyValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property no debe estar vacío',
    };
}
function isEmptyValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe estar vacía',
    };
}
function maxLengthValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser menor o igual a $constraint1 caracteres',
    };
}
function isEnumValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser un valor de enum válido',
    };
}
function isEmailValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser un correo electrónico',
    };
}
function isBooleanValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser un valor booleano',
    };
}
function isNumberValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser un número',
    };
}
function isDateValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser una fecha válida',
    };
}
function isUrlValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser una url válida',
    };
}
function minValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe contener como valor mímino $constraint1',
    };
}
function maxValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe contener como valor máximo $constraint1',
    };
}
//# sourceMappingURL=validation-message.js.map