const multer = require('multer');
const randomString = require('randomstring');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/blogimages');
    },
    filename: (req, file, cb) => {
        cb(null, randomString.generate(7) + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    //accept or reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png')
        cb(null, true);
    else
        cb(null, false);
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

module.exports = upload;