import Users from "./components/user/index";
import GetUser from "./components/user/index.get";

const express = require("express");
export const routes = express.Router();
// routes.get("/get-backgrounds", GetBackgrounds);
// routes.post("/post-backgrounds", PostBackgrounds);
// routes.post("/email", sendEmail);

routes.post("/user", Users);
routes.get("/user", GetUser);
