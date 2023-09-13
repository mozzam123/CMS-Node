const express = require("express");
const app = express();

const userRouter = require("./routes/userRoutes");
const contentRouter = require("./routes/contentRoutes");

// Middlewares
app.use(express.json());

app.use(userRouter);
app.use(contentRouter);

module.exports = app;
