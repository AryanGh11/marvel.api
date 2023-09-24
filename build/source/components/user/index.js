"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_errors_1 = __importDefault(require("./index.errors"));
const index_model_1 = __importDefault(require("./index.model"));
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });
function Users(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = req.body.name;
        const username = req.body.username;
        const image = req.body.image;
        const email = req.body.email;
        const password = req.body.password;
        try {
            const UserModelInstance = yield (0, index_model_1.default)();
            const newUser = new UserModelInstance({
                name: name,
                username: username,
                image: image,
                email: email,
                password: password,
            });
            yield newUser.save();
            res.send("User created successfully");
        }
        catch (err) {
            const error = (0, index_errors_1.default)(err);
            res.send(error);
        }
    });
}
exports.default = Users;
