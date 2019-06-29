/**
 * Dependencies
 */
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");

/*** Security*/
const cors = require("cors");
const helmet = require("helmet");

/*** Express App*/
const app = express();

/*** Middleware*/
app.use(logger("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

/*** Configs*/
require("./configs");
require("./configs/mongo");
require("./configs/routes")(app);

/*** Handle error*/
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err.message || "Internal Server Error.");
});

/*** Render front-end*/
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

module.exports = { app };
