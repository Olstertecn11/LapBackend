const multer = require('multer');
var express = require('express');
var router = express.Router()
const File = require('../../controllers/files.controller.js');
const os = require('os');

const upload = multer({ dest: os.tmpdir() });
router.post('/upload', upload.single('pdfFile'), File.upload);
router.get('/pdfs', File.getAllFiles);


module.exports = router;
