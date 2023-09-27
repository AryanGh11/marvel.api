import AvatarModel from "./index.model";

export default async function GetAvatar(req?: any, res?: any) {
  const user = await AvatarModel();
  user
    .find({})
    .then((avatars: any) => {
      res.send(avatars);
      return avatars;
    })
    .catch((err: any) => {
      console.error(err);
    });
}
