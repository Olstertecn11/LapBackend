const sql = require('./db.js');
const Degree = {};



Degree.create = (name, result) => {
  var _query = `insert into tbl_degree(deg_name)values('${name}')`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
}


Degree.getAll = (result) => {
  var _query = `select * from tbl_degree`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
}

Degree.delete = (Id, result) => {
  var _query = `delete from tbl_degree where deg_id='${Id}'`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
}

module.exports = Degree;
