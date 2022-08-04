const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express(); // express app

const cors = require("cors");

const USER_ROUTES = require("./routes/user");
const TODO_ROUTES = require("./routes/todo");

const PATH = "/user";

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use("", USER_ROUTES);
app.use(PATH, TODO_ROUTES);

app.listen(3000); // listens for requests
