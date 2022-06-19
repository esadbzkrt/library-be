const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db/config/config.json");
const api = require("./api");

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("SA");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
