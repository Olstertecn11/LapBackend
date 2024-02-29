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

exports.saveImageFromActivity = (req, res) => {
  const { idActivity, img } = req.body;
  Activity.saveImage(idActivity, img, (err, data) => {
    if (err) {
      console.log(err);
      return res.send({ status: false })
    }
    else {
      return res.send({ status: true })
    }
  });
}


exports.getImagesFromActivity = (req, res) => {
  const { idActivity } = req.query;
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
      return res.send({ status: false })
    }
    else {
      return res.send({ status: true })
    }
  });


}

