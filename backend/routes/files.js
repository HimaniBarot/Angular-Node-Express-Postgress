const express = require("express");
const router = express.Router();

const file = require("../controller/files");

router.post("/file", file.fileUpload, file.createFile);

module.exports = router;