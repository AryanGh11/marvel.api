import UserModel from "../../components/user/index.model";
import { UserType } from "../../components/user/index.type";

export default async function UpdateUser(req: UserType, res: any) {
  const user = await UserModel();
  const email = req.body.email;
  user
    .updateOne({ email: email }, { $set: { name: "Hallo" } })
    .then((users: any) => {
      res.send("User updated successfully");
    })
    .catch((err: any) => {
      console.error(err);
    });
}
