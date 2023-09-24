var express = require("express");
var app = express();
var routes = require("../source/routes");
var port = 4000;
var bodyParser = require("body-parser");
var cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use("/", routes);
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
