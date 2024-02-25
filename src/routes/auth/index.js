var express = require('express');
var router = express.Router()



router.get('/', (req, res) => {
  res.send('get request')
});


router.post('/', (req, res) => {
  console.log(req.body)
  res.send('post')
});



module.exports = router;
