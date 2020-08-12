const express = require("express");

const app = express();
const port = process.env.PORT || 4000;
app.set("port", port);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
