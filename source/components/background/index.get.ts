import BackgroundModel from "./index.model";

export default async function GetBackground(req: any, res: any) {
  const user = await BackgroundModel();
  user
    .find({})
    .then((backgrounds: any) => {
      res.send(backgrounds);
    })
    .catch((err: any) => {
      console.error(err);
    });
}
