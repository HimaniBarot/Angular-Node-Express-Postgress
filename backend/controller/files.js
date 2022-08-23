const multer = require("multer");
const path = require("path");

const file = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

exports.fileUpload = multer({
    storage: file
}).single('files');

exports.createFile =
    (req, res) => {
        try {
            const file = req.file;
            console.log(file);
            // const uploaded_file = file;
            res.json({
                file: file,
                message: "File uploaded successfully."
            })
        } catch (error) {
            console.error("error" + error);
        }
    }