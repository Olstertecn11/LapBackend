var express = require('express');
var router = express.Router()
const User = require('../../controllers/user.controller.js');



router.post('/', User.newUser);
router.get('/', User.getAll);
router.delete('/', User.deleteUser);



module.exports = router;
