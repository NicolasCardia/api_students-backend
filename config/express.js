const bodyParser = require("body-parser");
const express = require("express");
const config = require("config");
const consign = require("consign");

module.exports = () => {
  const app = express();

  //Setando variaveis da aplicação
  app.set("port", process.env.PORT || config.get("server.port"));

  //middlewares
  app.use(bodyParser.json());

  //ENDPOINTS
  consign({ cwd: "api" })
    .then("data")
    .then("controllers")
    .then("routes")
    .into(app);

  require("../api/routes/students")(app);

  return app;
};
