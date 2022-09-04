const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dve"));
app.use(cors());
app.use(express.json());

const usersRouter = require("./routers/users");

app.use("/users", usersRouter);

module.exports = app;
