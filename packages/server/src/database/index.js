const mongoose = require("mongoose");
const config = require("../config/index");

/**
 * Creating the db in mongo
 */

mongoose
  .connect(config.DB.URL, {
    // user: config.DB.USER,
    // pass: config.DB.PASSWORD,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.error(err, "Unable to connect to DB."));
