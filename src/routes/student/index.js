var express = require('express');
var router = express.Router()
const Student = require('../../controllers/student.controller');

router.get('/', Student.getAll);



module.exports = router;
