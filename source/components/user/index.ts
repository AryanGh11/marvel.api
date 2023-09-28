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
  const bio = req.body.bio;
  const avatar = req.body.avatar;
  const email = req.body.email;
  const password = req.body.password;
  const phone_number = req.body.phone_number;

  try {
    const UserModelInstance = await UserModel();
    const newUser = new UserModelInstance({
      name: name,
      username: username,
      bio: bio,
      avatar: avatar,
      email: email,
      password: password,
      phone_number: phone_number,
    });
    await newUser.save();
    res.send("User created successfully");
  } catch (err: any) {
    const error = UserErrors(err);
    res.send(err);
  }
}
