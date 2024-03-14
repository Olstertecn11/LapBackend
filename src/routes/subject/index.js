var express = require('express');
var router = express.Router()
const Subject = require('../../controllers/subject.controller.js');



router.post('/', Subject.create);
router.get('/', Subject.getAll);
router.delete('/', Subject.delete);



module.exports = router;
