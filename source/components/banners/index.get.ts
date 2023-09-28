import BannerModel from "./index.model";

export default async function GetBanner(req: any, res: any) {
  const user = await BannerModel();
  user
    .find({})
    .then((banners: any) => {
      res.send(banners);
    })
    .catch((err: any) => {
      console.error(err);
    });
}
