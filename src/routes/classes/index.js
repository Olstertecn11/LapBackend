var express = require('express');
var router = express.Router()
const Class = require('../../controllers/class.controller.js');



router.get('/', Class.getClasses);
router.post('/', Class.create);
router.get('/find', Class.getClassesByTeacher);
router.get('/find-by-id', Class.getClassById);
router.delete('/', Class.deleteClassById);



module.exports = router;
