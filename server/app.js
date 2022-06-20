const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
const api = require("./api");

app.use("/api", api);

app.get("/", async (req, res)  => {
  res.send("SA");

 
});

app.listen(3000, async () => {

  console.log("Server is running on port 3000");

  try {
    await db.sequelize.authenticate();
    console.log('Connected Database');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
});
