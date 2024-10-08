const multer = require('multer');
var express = require('express');
var router = express.Router()
const File = require('../../controllers/files.controller.js');
const os = require('os');

const upload = multer({ dest: os.tmpdir() });
router.post('/upload', upload.single('pdfFile'), File.upload);
router.post('/pdfs/update', upload.single('pdfFile'), File.update);
router.get('/pdfs', File.getAllFiles);
router.delete('/pdfs', File.deleteFileById);


module.exports = router;
