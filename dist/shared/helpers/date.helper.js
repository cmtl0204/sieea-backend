"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateFormat = getDateFormat;
const date_fns_1 = require("date-fns");
function getDateFormat(date) {
    if (date.toString().includes('T05'))
        return date;
    return (0, date_fns_1.add)(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0), {
        months: 0,
        days: 1,
    });
}
//# sourceMappingURL=date.helper.js.map