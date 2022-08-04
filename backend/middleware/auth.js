const jwt = require("jsonwebtoken");

// const authorization = (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(" ")[1];
//         console.log(token);
//         jwt.verify(token, "secret_this_should_be_longer");
//         next();
//     } catch (error) {
//         res.status(401).json({ message: "Auth failed!" });
//     }
// };

// const authenticateToken = function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         console.log(err)
//         if (err) return res.sendStatus(403)
//         req.user = user
//         next()
//     })
// }
// module.exports = authenticateToken;

const verifyToken = (req, res, next) => {
    console.log(req.body);

    try {
        const token = req.headers.token.split(" ")[1];
        console.log(token);
        jwt.verify(token, "secret_token_for_user");
        next();
    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
}
console.log(verifyToken);
module.exports = verifyToken;