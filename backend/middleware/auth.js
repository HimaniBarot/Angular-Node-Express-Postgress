const jwt = require("jsonwebtoken");
const express = require("express");
const { nextTick } = require("process");
const app = express(); // express app

const authorization = (req, res, next) => {
    // try {
    //     const token = req.headers.authorization.split(" ")[1];
    //     console.log(token);
    //     jwt.verify(token, "secret_token_for_users_sfsfsfdfsdg");
    //     next();
    // } catch (error) {
    //     res.status(401).json({ message: "Auth failed!" });
    // }

    try {
        const verifyToken = req.headers.authorization;
        if (verifyToken) {
            console.log(verifyToken);
            jwt.verify(verifyToken, "top-secret-phrases");
            res.json("verified");
            next();
        }else{
            res.json({
                message: "Not ok"
            })
        }
    } catch (error) {
        res.status(401).json({ message: error });
    }

}
module.exports = authorization;
// app.use("/create", (req, res) => {
//     const claims = { iss: 'fun-with-jwts', sub: 'AzureDiamond' }
//     console.log(claims);
//     const token = jwt.sign(
//         claims,
//         'top-secret-phrase',
//         {
//             expiresIn: "15h"
//         }
//     );
//     console.log(token);
// })
// app.get("/verify", (req, res, next) => {

//     try {
//         const verifyToken = req.headers.authorization
//         console.log(verifyToken);
//         jwt.verify(verifyToken, "top-secret-phrase");
//         res.json("verified");
//         next();
//     } catch (error) {
//         res.status(401).json({ message: error });
//     }
// })

// app.listen(3000);