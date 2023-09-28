import BackgroundErrors from "./index.errors";
import BackgroundModel from "./index.model";
import { BackgroundType } from "./index.type";

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

export default async function Backgrounds(req: BackgroundType, res: any) {
  const title = req.body.title;
  const url = req.body.url;

  try {
    const BackgroundModelInstance = await BackgroundModel();
    const newBackground = new BackgroundModelInstance({
      title: title,
      url: url,
    });
    await newBackground.save();
    res.send("Background added successfully");
  } catch (err: any) {
    const error = BackgroundErrors(err);
    res.send(error);
  }
}
