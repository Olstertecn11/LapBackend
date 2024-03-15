var express = require('express');
var router = express.Router()
const Class = require('../../controllers/class.controller.js');



router.get('/', Class.getClasses);
router.post('/', Class.create);
router.get('/find', Class.getClassesByTeacher);



module.exports = router;
