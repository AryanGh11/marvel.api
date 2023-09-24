import SendEmail from "./components/email";
import Users from "./components/user";
import GetUser from "./components/user/index.get";

const express = require("express");
const routes = express.Router();

// routes.get("/get-backgrounds", GetBackgrounds);
// routes.post("/post-backgrounds", PostBackgrounds);

routes.post("/user", Users);
routes.get("/user", GetUser);

routes.post("/email", SendEmail);

module.exports = routes;
