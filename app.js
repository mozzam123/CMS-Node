const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("mozzam");
});



module.exports = app;