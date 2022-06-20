const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("./db");
const api = require("./api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.use("/api", api);

app.get("/", async (req, res)  => {
  res.send("SA");

 
});

app.listen(3000, async () => {

  console.log("Server is running on port 3000");

  await db.connect();

  await db.createTables();
  
});
