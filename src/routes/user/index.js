var express = require('express');
var router = express.Router()
const User = require('../../controllers/user.controller.js');



// user managment functions
router.post('/', User.newUser);
router.get('/', User.getAll);
router.delete('/', User.deleteUser);


//profile functions
router.post('/profile', User.updateUserProfile);
router.get('/profile', User.getUserAttributes);



module.exports = router;
