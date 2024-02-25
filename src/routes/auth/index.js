var express = require('express');
var router = express.Router()
const User = require('../../controllers/user.controller.js');



router.get('/', (req, res) => {
  res.send('get request')
});


router.post('/', User.userExist);



module.exports = router;
