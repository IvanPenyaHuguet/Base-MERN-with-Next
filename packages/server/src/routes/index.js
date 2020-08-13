const express = require("express");
const path = require("path");

const router = express.Router();
const apiPrefix = "/api/";

module.exports = (app) => {
  app.use("/", express.static(path.join(__dirname, public)));

  router.use("/", (req, res) => {
    // res.sendFile(path.join(__dirname, public, 'index.html'));
  });
  //router.use( apiPrefix, [ ... routes ...]);
  app.use(router);
};
