
const Class = require('../models/class.model.js');


exports.create = (req, res) => {
  const { degree, subject, teacher } = req.body;
  if (!degree || !subject || !teacher) {
    return res.send({ msg: 'missing dependencies' })
  }
  Class.createClass(degree, subject, teacher, (err, data) => {
    if (err) {
      return res.send({ status: false, msg: err })
    }
    res.send({ status: true, msg: 'Created' })
  });
}


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


exports.deleteClassById = (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.send({ msg: 'missing dependencies' })
  }
  Class.deleteClass(id, (err, data) => {
    if (err) {
      res.send({ status: false, msg: err })
    }
    else {
      res.send({ status: true })
    }
  });
}







