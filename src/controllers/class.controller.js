
const Class = require('../models/class.model.js');




exports.getClasses = (req, res) => {
  Class.getAllClasses((err, data) => {
    if (err) {
      console.log('err');
      console.log(err);
      res.send({ msg: err })
    }
    else {
      console.log('data');
      console.log(data);
      res.send({ data: data })
    }
  });
}

exports.getClassesByTeacher = (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.send({ msg: 'missing dependencies' })
  }
  Class.getClassesByTeacher(id, (err, data) => {
    if (err) {
      res.send({ msg: err })
    }
    else {
      res.send({ data })
    }
  });
}
