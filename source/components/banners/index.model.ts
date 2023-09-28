import BannerErrors from "./index.errors";

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
export default async function BannerModel() {
  mongoose.connect(
    "mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const modelName = "banner";

  try {
    const existingModel = mongoose.modelNames().includes(modelName);
    const BannerModel = existingModel
      ? mongoose.model(modelName)
      : mongoose.model(
          modelName,
          new mongoose.Schema({
            title: { type: String, default: "banner" },
            url: { type: String, unique: true, require: true },
            category: { type: String, require: true },
          })
        );
    return BannerModel;
  } catch (err: any) {
    console.log(err);
    const error = BannerErrors(err);
    throw error;
  }
}
