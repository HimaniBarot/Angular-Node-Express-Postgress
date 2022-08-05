const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        jwt.verify(token, "secret_token_for_users_sfsfsfdfsdg");
        next();
    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
}
module.exports = authorization;