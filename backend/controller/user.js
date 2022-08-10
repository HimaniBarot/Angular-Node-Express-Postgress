const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
    try {
        let userDetail;
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
            userDetail = newUser.rows[0];

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
}

exports.userLogin = async (req, res) => {
    // Authenticate User
    try {
        const username = req.body.username;
        const user_pass = req.body.password;

        const loggedUser = await pool.query(
            "SELECT * FROM userdetails WHERE username = $1",
            [username]
        );
        const fetchedUser = loggedUser.rows[0].username;
        const fetchedUserId = loggedUser.rows[0].user_id;
        const fetchedPassword = loggedUser.rows[0].password;

        const comparePass = await bcrypt.compare(user_pass, fetchedPassword)
            .then((response) => {
                return response;
            });

        if (fetchedUser && (comparePass == true)) {
            // CREATE TOKEN
            const token = jwt.sign(
                { username: fetchedUser, user_id: fetchedUserId },
                'top-secret-phrases',
                {
                    expiresIn: "24h"
                }
            );
            // res.setHeader("Authorization", "Bearer" +" " +token);
            res.status(200).json({
                statusCode: 200,
                user_id: fetchedUserId,
                username: fetchedUser,
                token: token,
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
}