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
const mongoose = require("mongoose");
/**
 * @description This function will create a new document in User model
 * @example
 * const UserModelInstance = await UserModel();
  try {
    const newUser = new UserModelInstance({
      name: name,
      username: username,
      email: email,
      password: password,
    });

    await newUser.save();

    console.log("User created successfully");
    res.send("User created successfully");
  } catch (err) {
    console.error(err);
    res.send(err);
  }
 * @returns Create and save new document in User model or catch the error
 */
function UserModel() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose.connect("mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });
        const modelName = "user";
        try {
            const existingModel = mongoose.modelNames().includes(modelName);
            const UserModel = existingModel
                ? mongoose.model(modelName)
                : mongoose.model(modelName, new mongoose.Schema({
                    name: { type: String, default: "User" },
                    username: { type: String, unique: true },
                    image: { type: String },
                    email: { type: String, unique: true, require: true },
                    password: { type: String },
                }));
            return UserModel;
        }
        catch (err) {
            const error = (0, index_errors_1.default)(err);
            throw error;
        }
    });
}
exports.default = UserModel;
