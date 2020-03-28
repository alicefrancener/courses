const express = require("express");
const bodyParser = require("body-parser");
const consign = require("consign");

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  consign()
    .include("controllers")
    .into(app);
  return app;
};
