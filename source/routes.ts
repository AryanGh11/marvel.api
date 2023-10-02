import Avatars from "./components/avatar";
import GetAvatar from "./components/avatar/index.get";
import Backgrounds from "./components/background";
import GetBackground from "./components/background/index.get";
import Banners from "./components/banners";
import GetBanner from "./components/banners/index.get";
import SendEmail from "./components/email";
import Movies from "./components/movie";
import GetMovie from "./components/movie/index.get";
import Users from "./components/user/index";
import GetUser from "./components/user/index.get";
import UpdateUser from "./updates/user";

const express = require("express");
export const routes = express.Router();

routes.get("/avatar", GetAvatar);
routes.post("/avatar", Avatars);

routes.get("/banner", GetBanner);
routes.post("/banner", Banners);

routes.get("/background", GetBackground);
routes.post("/background", Backgrounds);

routes.post("/email", SendEmail);

routes.post("/user", Users);
routes.get("/user", GetUser);

routes.post("/movie", Movies);
routes.get("/movie", GetMovie);

routes.post("/update-user", UpdateUser);
