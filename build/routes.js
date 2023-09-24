"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const background_1 = __importDefault(require("./components/background"));
const index_get_1 = __importDefault(require("./components/background/index.get"));
const email_1 = __importDefault(require("./components/email"));
const index_1 = __importDefault(require("./components/user/index"));
const index_get_2 = __importDefault(require("./components/user/index.get"));
const express = require("express");
exports.routes = express.Router();
exports.routes.get("/background", index_get_1.default);
exports.routes.post("/background", background_1.default);
exports.routes.post("/email", email_1.default);
exports.routes.post("/user", index_1.default);
exports.routes.get("/user", index_get_2.default);
