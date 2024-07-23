
const sql = require('./db.js');


const Class = (_class) => {
  this.id = _class.id
  this.degree = _class.degree
  this.subject = _class.subject
  this.teacher = _class.teacher
}

Class.createClass = (degree, subject, teacher, result) => {
  var _query = `insert into tbl_class(cls_degree, cls_teacher, cls_subject)values('${degree}', '${teacher}', '${subject}')`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    result(null, res);
  });
}

Class.deleteClass = (Id, result) => {
  var _query = `call deleteClass(${Id})`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    result(null, res);
  });
}



Class.getClassesByTeacher = (id, result) => {
  var _query = `call GetClassDetailsByTeacher(${id})`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
}


Class.getAllClasses = (result) => {
  var _query = `call GetClassDetails()`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
}




Class.getClassById = (id, result) => {
  var _query = `call getClassById(${id})`;
  sql.query(_query, (err, res) => {
    if (err) {
      result(err, { code: 400, msg: err, data: [] });
      return;
    }
    result(null, { code: 200, msg: 'Obteniendo clases por id', data: res[0] });
  });
}


module.exports = Class;
