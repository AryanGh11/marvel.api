import UserModel from "./index.model";

export default async function GetUser(req: any, res: any) {
  const user = await UserModel();
  user
    .find({})
    .then((users: any) => {
      res.send(users);
    })
    .catch((err: any) => {
      console.error(err);
    });
}
