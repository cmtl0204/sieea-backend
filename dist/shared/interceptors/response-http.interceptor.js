"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHttpInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let ResponseHttpInterceptor = class ResponseHttpInterceptor {
    intercept(context, next) {
        if (false) {
            throw new common_1.ServiceUnavailableException();
        }
        return next.handle().pipe((0, operators_1.map)((response) => {
            return {
                data: response.data,
                pagination: response.pagination,
                message: response.message,
                title: response.title,
                version: '1.0.1',
            };
        }));
    }
};
exports.ResponseHttpInterceptor = ResponseHttpInterceptor;
exports.ResponseHttpInterceptor = ResponseHttpInterceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseHttpInterceptor);
//# sourceMappingURL=response-http.interceptor.js.map