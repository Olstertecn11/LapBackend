var express = require('express');
var router = express.Router()
const Comment = require('../../controllers/comments.controller');


router.post('/', Comment.create);
router.get('/', Comment.getByClassAndPdf);



module.exports = router;
var router = express.Router()



