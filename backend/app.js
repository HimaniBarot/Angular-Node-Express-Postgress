// const dotenv = require("dotenv");
// dotenv.config();
const express = require("express");
const app = express(); // express app
const jwt = require("jsonwebtoken");

const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

// login
// app.post("/login", (req, res) => {
//     // const username = req.body.username;
//     // const user = { name: username };
//     let data = {
//         time: Date(),
//         userId: 12,
//     }

//     const accessToken = jwt.sign(data, process.env.JWT_SECRET_KEY);
//     res.json({ accessToken: accessToken });
//     // res.send(accessToken);
// });

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader.split(' ')[1];

// }

// get verification JWT
// app.get("/login/validateToken", (req, res) => {
//     let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
//     let jwtSecretKey = process.env.JWT_SECRET_KEY;

//     try {
//         const token = req.header(tokenHeaderKey);
//         const verifiedToken = jwt.verify(token, jwtSecretKey);

//         if (verifiedToken) {
//             return res.send("Successfully Verified.");
//         } else {
//             return res.status(401).send(error);
//         }
//     } catch (error) {
//         // Access denied
//         return res.status(401).send(error);
//     }
// })

// add a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newTodo.rows[0]);
        console.log(req.body);
    } catch (error) {
        console.error(error.message);
    }
});

// get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.error(error.message);
    }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
        );
        res.json("Todo was updated.")
    } catch (error) {
        console.error(error.message);
    }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1", [id]
        );
        res.json("Todo was deleted");
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(3000); // listens for requests

