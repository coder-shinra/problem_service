const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/server.config.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/ping", (req, res) => {
  res.json({ msg: "Problem service is Alive" });
});

app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
