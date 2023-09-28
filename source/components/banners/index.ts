import BannerErrors from "./index.errors";
import BannerModel from "./index.model";
import { BannerType } from "./index.type";

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

export default async function Banners(req: BannerType, res: any) {
  const title = req.body.title;
  const url = req.body.url;
  const category = req.body.category;

  try {
    const BannerModelInstance = await BannerModel();
    const newBanner = new BannerModelInstance({
      title: title,
      url: url,
      category: category,
    });
    await newBanner.save();
    res.send("Banner added successfully");
  } catch (err: any) {
    const error = BannerErrors(err);
    res.send(error);
  }
}
