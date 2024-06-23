
const sql = require('./db.js');


const Comment = (_class) => {
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

Comment.create = (content, file, user) => {
  var _query = `insert into tbl_`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    result(null, res);
  });
}



Class.deleteClass = (Id, result) => {
  var _query = `delete from tbl_class where cls_id=${Id}`;
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


module.exports = Class;
