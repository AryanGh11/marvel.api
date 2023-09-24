"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const routes_1 = require("./routes");
const port = 4000;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use("/", routes_1.routes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
