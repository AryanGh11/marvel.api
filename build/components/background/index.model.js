"use strict";
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
      title: title,
      url: url,
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
async function BackgroundModel() {
    mongoose.connect("mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });
    const modelName = "background";
    try {
        const existingModel = mongoose.modelNames().includes(modelName);
        const BackgroundModel = existingModel
            ? mongoose.model(modelName)
            : mongoose.model(modelName, new mongoose.Schema({
                title: { type: String, default: "background" },
                url: { type: String, unique: true, require: true },
            }));
        return BackgroundModel;
    }
    catch (err) {
        console.log(err);
        const error = (0, index_errors_1.default)(err);
        throw error;
    }
}
exports.default = BackgroundModel;
