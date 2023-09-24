"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function UserErrors(error) {
    if (error.code === 11000) {
        return "Document already existing";
    }
}
exports.default = UserErrors;
