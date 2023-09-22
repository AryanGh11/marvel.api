import UserErrors from "./index.errors";
import UserModel from "./index.model";
import { UserType } from "./index.type";

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

export default async function Users(req: UserType, res: any) {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const UserModelInstance = await UserModel();
  try {
    const newUser = UserModelInstance.create({
      name: name,
      username: username,
      email: email,
      password: password,
    });

    await newUser.save();

    console.log("User created successfully");
    res.send("User created successfully");
  } catch (err) {
    const error = UserErrors(err);
    res.send(error);
  }
}
