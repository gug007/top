import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import { APP_PORT } from "./config/app";
import accessControl from "./access-control";
import path from "path";
import Sequelize from "sequelize";
import config from "./config/config";

const app = express();

app.use(accessControl);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(routes);

app.listen(APP_PORT, () => console.log("[API SERVER]", APP_PORT));

const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(config[env].url);

sequelize
  .authenticate()
  .then(() => {
    console.log("[DATABASE] Successfully connected");
  })
  .catch(err => {
    console.error("[DATABASE] Unable to connect", err);
  });

module.exports = app;
