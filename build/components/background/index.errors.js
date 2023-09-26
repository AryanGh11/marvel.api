"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function BackgroundErrors(error) {
    if (error.code === 11000) {
        return "Document already existing";
    }
}
exports.default = BackgroundErrors;
