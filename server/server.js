const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const api = require("./api");
const { sequelize } = require("../models");

app.use(router);
app.use('/api', api);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

sequelize.authenticate().then(() => {
  console.log("Connected to the database");
}
).catch(err => {
  console.error("Error: " + err);
}),

sequelize.sync().then(() => {
  console.log("Database synced");
}
).catch(err => {
  console.error("Error: " + err);
}
);

app.get("/", (req, res) => {
  res.send("Hello World!");
}
);



app.listen(3000, () => {
  console.log("Server is running on port 3000");
}
);