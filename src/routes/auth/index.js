var express = require('express');
var router = express.Router()
const User = require('../../controllers/user.controller.js');



router.get('/', User.hasSession);
router.post('/', User.userExist);
router.get('/session', User.hasActiveSession);
router.delete('/', User.closeUserSession);


module.exports = router;
