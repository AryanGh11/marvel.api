import Users from "./components/user";
import UserModel from "./components/user/index.model";

const express = require("express");
const routes = express.Router();
// routes.get("/get-backgrounds", GetBackgrounds);
// routes.get("/get-user", GetUsers);

// routes.post("/post-backgrounds", PostBackgrounds);
// routes.post("/post-user", PostUsers);
// routes.post("/email", sendEmail);
routes.post("/user", Users);
routes.get("/user", UserModel);
module.exports = routes;
