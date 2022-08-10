const express = require("express");
const router = express.Router();

const user = require("../controller/user");

// =============================== SIGNUP ===================================== //
router.post("/signup", user.createUser);

// =============================== LOGIN ===================================== //
router.post('/login', user.userLogin);

module.exports = router;