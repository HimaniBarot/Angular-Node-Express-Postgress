const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db");

const router = express.Router();

// =============================== SIGNUP ===================================== //
router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = req.body.username;

        const salt = await bcrypt.genSalt(10);
        const user_password = await bcrypt.hash(req.body.password, salt);

        // FETCH all registred users from database
        const selectUser = await pool.query(
            "SELECT username FROM userdetails WHERE username = $1",
            [user]
        );

        // FIND requested username from fetched users.
        const filteredUser = selectUser.rows.find((res) => {
            return res.username;
        })

        // IF requested username is not existed in database then create the new one otherwise throw message.
        if (!filteredUser) {
            const newUser = await pool.query(
                "INSERT INTO userdetails (username, password) VALUES($1, $2) RETURNING *",
                [username, user_password]
            );
            const fetchedUser = newUser.rows[0].username;
            res.json({
                message: "User created",
                username: fetchedUser
            });
        } else {
            res.json({
                message: "User already exist with this username."
            });
            res.end();
        }

    } catch (error) {
        console.error(error.message);
    }
});

// =============================== LOGIN ===================================== //
router.post('/login', async (req, res) => {
    // Authenticate User
    try {
        const username = req.body.username;
        const user_pass = req.body.password;

        const loggedUser = await pool.query(
            "SELECT * FROM userdetails WHERE username = $1",
            [username]
        );
        const fetchedUser = loggedUser.rows[0].username;
        const fetchedPassword = loggedUser.rows[0].password;
        const comparePass = await bcrypt.compare(user_pass, fetchedPassword)
            .then((response) => {
                return response;
            });

        if (fetchedUser && (comparePass == true)) {
            res.status(200).json({
                statusCode: 200,
                message: "Logged in"
            });
            res.end();
        } else if (fetchedUser && (comparePass != true)) {
            res.json({
                message: "Password not matched"
            });
            res.end();
        }
    } catch (error) {
        res.json({
            message: "User not exist"
        });
        res.end();
    }
});

module.exports = router;