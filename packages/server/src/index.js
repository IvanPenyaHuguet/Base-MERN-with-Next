const express = require("express");
const Routes = require("./routes");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimiterMiddleware = require("./middlewares/rateMiddleware");
const graphql = require("./middlewares/Graphql");
require("dotenv").config();
require("./database/index");

const isProd = process.env.NODE_ENV === "production";
const isTest = process.env.NODE_ENV === "test";

/**
 * Initializing the server with config, middlewares and routes
 * @param app Express application for managing the server basics.
 */

const app = express();
const port = process.env.PORT || 4000;

// Config
app.set("port", port);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());
if (!isProd) {
  app.use(morgan("dev"));
}
if (!isTest) {
  app.use(rateLimiterMiddleware);
}
// Middlewares

// Routes
app.use(Routes);

//fallback routes
app.all("*", (req, res) => res.status(NO_CONTENT).send());

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
