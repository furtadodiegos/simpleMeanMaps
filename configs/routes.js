const express = require("express"),
  deliveries = require("../api/deliveries/deliveries.routes");

module.exports = app => {
  const router = express.Router();

  //Routes
  deliveries(router);

  //Check if api is online
  router.route("/healthcheck").get((req, res) => res.send("OK"));

  app.use("/api", router);
};
