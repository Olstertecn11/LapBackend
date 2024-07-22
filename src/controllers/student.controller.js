const Student = require('../models/student.model');

exports.getAll = (req, res) => {
  Student.all((error, data) => {
    res.send(data);
  });
}

exports.getByClass = (req, res) => {
  const { id_class } = req.query;
  console.log(id_class);
  Student.getByClass(id_class, (err, data) => {
    return res.send({ response: data });
  });
}

exports.save = (req, res) => {
  const { name, surname, id_class } = req.body;
  if (!name || !surname || !id_class) return res.send({ msg: 'Error' });
  Student.create(name, surname, id_class, (err, results) => {
    if (!err) {
      return res.send({ msg: 'Guardado correctamente', code: 200 });
    }
    return res.send({ msg: 'Error' + err, code: 400 })
  });
}




