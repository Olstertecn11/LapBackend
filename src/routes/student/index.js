var express = require('express');
var router = express.Router()
const Student = require('../../controllers/student.controller');

router.get('/', Student.getAll);
router.get('/get-by-class', Student.getByClass);



module.exports = router;
