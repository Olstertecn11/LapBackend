var express = require('express');
var router = express.Router()
const Activity = require('../../controllers/activities.controller.js');


router.get('/', Activity.getAllActivities);
router.post('/', Activity.saveActivity);
router.get('/images', Activity.getImagesFromActivity);





module.exports = router;
