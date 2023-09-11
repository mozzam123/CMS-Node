const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();


// Environment variables
const PORT = process.env.PORT || 8000;
const DB = process.env.DATABASE;


app.listen(PORT, () => {
  console.log("Listening on Port: ", PORT);
});


// Database connection
mongoose
  .connect(DB)
  .then(() => {
    console.log("Mongo connected for CMS");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
