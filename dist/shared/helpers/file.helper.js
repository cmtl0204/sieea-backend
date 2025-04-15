"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excelFileFilter = exports.fileFilter = exports.imageFilter = exports.getFileName = void 0;
const path = require("path");
const getFileName = (req, file, callback) => {
    const fileExtName = path.extname(file.originalname);
    callback(null, `${Date.now()}${fileExtName}`);
};
exports.getFileName = getFileName;
const imageFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return callback(new Error('Solo jpg|jpeg|png estos tipos están permitidos!'), false);
    }
    callback(null, true);
};
exports.imageFilter = imageFilter;
const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(pdf|doc|docx|ppt|pptx|pptm|xlsx|xls|jpg|jpeg|png)$/)) {
        return callback(new Error('Solo pdf|doc|docx|ppt|pptx|pptm|xlsx|xls|jpg|jpeg|png estos tipos están permitidos!'), false);
    }
    callback(null, true);
};
exports.fileFilter = fileFilter;
const excelFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(xlsx|xls)$/)) {
        return callback(new Error('Solo xlsx|xls estos tipos están permitidos!'), false);
    }
    callback(null, true);
};
exports.excelFileFilter = excelFileFilter;
//# sourceMappingURL=file.helper.js.map