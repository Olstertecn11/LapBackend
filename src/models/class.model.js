
const sql = require('./db.js');


const Class = (_class) => {
  this.id = _class.id
  this.degree = _class.degree
  this.subject = _class.subject
  this.teacher = _class.teacher
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


module.exports = Class;
