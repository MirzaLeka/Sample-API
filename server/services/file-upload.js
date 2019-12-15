const multer = require('multer')

const fileUpload = multer({
  limits: {
    fileSize: 10000000
  },
  fileFilter(req, file, cb) {
    cb(undefined, true)
  }
});

module.exports = { fileUpload };
