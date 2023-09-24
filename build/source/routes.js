"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = __importDefault(require("./components/email"));
const user_1 = __importDefault(require("./components/user"));
const index_get_1 = __importDefault(require("./components/user/index.get"));
const express = require("express");
const routes = express.Router();
// routes.get("/get-backgrounds", GetBackgrounds);
// routes.post("/post-backgrounds", PostBackgrounds);
routes.post("/user", user_1.default);
routes.get("/user", index_get_1.default);
routes.post("/email", email_1.default);
module.exports = routes;
