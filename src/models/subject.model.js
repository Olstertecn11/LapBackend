
const sql = require('./db.js');
const Subject = {};



Subject.create = (name, result) => {
  var _query = `insert into tbl_subject(sbj_name)values('${name}')`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
}


Subject.getAll = (result) => {
  var _query = `select * from tbl_subject`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
}

Subject.delete = (Id, result) => {
  var _query = `delete from tbl_subject where sbj_id='${Id}'`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
}

module.exports = Subject;
