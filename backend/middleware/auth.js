const jwt = require("jsonwebtoken");
const express = require("express");
const { nextTick } = require("process");
const app = express(); // express app

const authorization = (req, res, next) => {
    try {
        const verifyToken = req.headers.authorization;
        if (verifyToken) {
            jwt.verify(verifyToken, "top-secret-phrases");
            res.json("verified");
            next();
        } else {
            res.json({
                message: "Not ok"
            })
        }
    } catch (error) {
        res.status(401).json({ message: error });
    }

}
module.exports = authorization;