const express = require("express");
const router = express.Router();

const todos = require("../controller/todo");

// add a todo
router.post("/todos", todos.createTodo);

// get all todos
router.get("/todos", todos.getAllTodos);

// get a todo
router.get("/todos/:id", todos.getTodo);

// update a todo
router.put("/todos/:id", todos.updateTodo);

// delete a todo
router.delete("/todos/:id", todos.deleteTodo);

module.exports = router;
