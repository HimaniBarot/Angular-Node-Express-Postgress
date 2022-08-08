const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express(); // express app

const cors = require("cors");

const USER_ROUTES = require("./routes/user");
const TODO_ROUTES = require("./routes/todo");
// const token = require("./middleware/auth");

// middleware
app.use(cors());
app.use(express.json());

app.use("", USER_ROUTES);
app.use("", TODO_ROUTES);
// app.use("", token);

app.listen(3000); // listens for requests
