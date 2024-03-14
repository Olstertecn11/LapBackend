const Subject = require('../models/subject.model.js');


exports.create = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.send({ message: 'Missing Dependencies' });
  }
  Subject.create(name, (err, data) => {
    if (err) {
      return res.send({ status: false, message: 'Creado Correctamente' });
    }
    res.send({ status: true, message: data });
  });
}

exports.delete = (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.send({ code: 0, message: 'Missing Id dependencie' });
  }
  Subject.delete(id, (error, data) => {
    if (error) {
      return res.send({ code: 0, message: error });
    }
    res.send({ code: 0, message: 'Elminado Correctamente' });
  });
}



exports.getAll = (req, res) => {
  Subject.getAll((error, data) => {
    if (error) {
      return res.send({ code: 0, message: error, data: [] });
    }
    res.send(data);
  });
}






