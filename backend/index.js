const express = require("express");
require("./db/config");
const User = require("./db/Users");
const app = express();

app.use(express.json())

app.post("/register", (req, res) => {
  res.send(req.body);
});

app.listen(4200);
