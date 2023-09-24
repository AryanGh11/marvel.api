"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_errors_1 = __importDefault(require("./index.errors"));
const index_model_1 = __importDefault(require("./index.model"));
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });
async function Backgrounds(req, res) {
    const title = req.body.title;
    const url = req.body.url;
    try {
        const BackgroundModelInstance = await (0, index_model_1.default)();
        const newUser = new BackgroundModelInstance({
            title: title,
            url: url,
        });
        await newUser.save();
        res.send("Background added successfully");
    }
    catch (err) {
        const error = (0, index_errors_1.default)(err);
        res.send(error);
    }
}
exports.default = Backgrounds;
