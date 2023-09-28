import UserModel from "../../components/user/index.model";
import { UserType } from "../../components/user/index.type";

export default async function UpdateUser(req: UserType, res: any) {
  const user = await UserModel();

  const name = req.body.name;
  const avatar = req.body.avatar;
  const email = req.body.email;
  const bio = req.body.bio;
  const phone_number = req.body.phone_number;
  const username = req.body.username;

  user
    .updateOne(
      { email: email },
      {
        $set: {
          name: name,
          avatar: avatar,
          email: email,
          bio: bio,
          phone_number: phone_number,
          username: username,
        },
      }
    )
    .then((users: UserType) => {
      res.json({ message: "User updated successfully" });
    })
    .catch((err: any) => {
      console.error(err);
    });
}
