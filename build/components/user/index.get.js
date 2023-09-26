"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_model_1 = __importDefault(require("./index.model"));
async function GetUser(req, res) {
    const user = await (0, index_model_1.default)();
    user
        .find({})
        .then((users) => {
        res.send(users);
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.default = GetUser;
