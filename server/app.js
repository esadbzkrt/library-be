const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db/index");
const api = require("./api");

app.use("/api", api);

app.get("/", async (req, res)  => {
  res.send("SA");

  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

app.listen(3000, () => {

  console.log("Server is running on port 3000");

  
});
