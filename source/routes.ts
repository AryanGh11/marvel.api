import Backgrounds from "./components/background";
import GetBackground from "./components/background/index.get";
import SendEmail from "./components/email";
import Users from "./components/user/index";
import GetUser from "./components/user/index.get";

const express = require("express");
export const routes = express.Router();

routes.get("/background", GetBackground);
routes.post("/background", Backgrounds);

routes.post("/email", SendEmail);

routes.post("/user", Users);
routes.get("/user", GetUser);
