import AvatarErrors from "./index.errors";
import AvatarModel from "./index.model";
import { AvatarType } from "./index.type";

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

export default async function Avatars(req: AvatarType, res: any) {
  const title = req.body.title;
  const url = req.body.url;

  try {
    const AvatarModelInstance = await AvatarModel();
    const newUser = new AvatarModelInstance({
      title: title,
      url: url,
    });
    await newUser.save();
    res.send("Avatar added successfully");
  } catch (err: any) {
    const error = AvatarErrors(err);
    res.send(error);
  }
}
