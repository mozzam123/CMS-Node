const express = require("express");
const app = express();

const userRouter = require("./routes/userRoutes");

// Middlewares
app.use(express.json());

app.use(userRouter);

module.exports = app;
