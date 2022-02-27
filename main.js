"use strict";

const express = require("express"),
  app = express(),
  router = express.Router();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
