const Activity = require('../models/activity.model.js');


exports.getAllActivities = (req, res) => {
  Activity.getAll((err, data) => {
    if (err) {
      res.send([])
    }
    else {
      res.send(data)
    }
  });

}


exports.getImagesFromActivity = (req, res) => {
  const { idActivity } = req.query;
  console.log(req);
  console.log(idActivity);
  Activity.getImageByActivity(idActivity, (err, data) => {
    if (err) {
      console.log(err);
      res.send([])
    }
    else {
      res.send(data)
    }
  });
}



exports.saveActivity = (req, res) => {
  const { name, description, date } = req.body;

  Activity.createActivity(name, description, date, (err, data) => {
    if (err) {
      return res.send({ msg: err })
    }
    else {
      return res.send({ msg: 'success' })
    }
  });


}

