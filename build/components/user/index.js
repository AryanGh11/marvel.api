"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_errors_1 = __importDefault(require("./index.errors"));
const index_model_1 = __importDefault(require("./index.model"));
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });
async function Users(req, res) {
    const name = req.body.name;
    const username = req.body.username;
    const image = req.body.image;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const UserModelInstance = await (0, index_model_1.default)();
        const newUser = new UserModelInstance({
            name: name,
            username: username,
            image: image,
            email: email,
            password: password,
        });
        await newUser.save();
        res.send("User created successfully");
    }
    catch (err) {
        const error = (0, index_errors_1.default)(err);
        res.send(err);
    }
}
exports.default = Users;
