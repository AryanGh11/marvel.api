import randomNumber from "../../utils/randomNumber";
import UserErrors from "./index.errors";

const mongoose = require("mongoose");

/**
 * @description This function will create a new document in User model
 * @example 
  try {
    const UserModelInstance = await UserModel();
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
export default async function UserModel() {
  mongoose.connect(
    "mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const modelName = "user";

  try {
    const existingModel = mongoose.modelNames().includes(modelName);
    const UserModel = existingModel
      ? mongoose.model(modelName)
      : mongoose.model(
          modelName,
          new mongoose.Schema({
            name: { type: String, default: "User" },
            username: {
              type: String,
              unique: true,
              default: "`user${randomNumber(1000, 9999)}`",
            },
            avatar: { type: String, default: "" },
            email: { type: String, unique: true, require: true },
            password: {
              type: String,
              default: randomNumber(100000, 999999),
            },
          })
        );
    return UserModel;
  } catch (err: any) {
    const error = UserErrors(err);
    throw error;
  }
}
