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
  const image = req.body.image;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const UserModelInstance = await UserModel();
    const newUser = new UserModelInstance({
      name: name,
      username: username,
      image: image,
      email: email,
      password: password,
    });
    await newUser.save();
    res.send("User created successfully");
  } catch (err: any) {
    const error = UserErrors(err);
    res.send(error);
  }
}
