var express = require('express');
var router = express.Router()
const Degree = require('../../controllers/degree.controller.js');


router.post('/', Degree.create);
router.get('/', Degree.getAll);
router.delete('/', Degree.delete);



module.exports = router;

