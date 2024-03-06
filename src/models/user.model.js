
const sql = require('./db.js');


const User = (user) => {
  this.id = user.id
  this.username = user.username
  this.surname = user.surname
  this.password = user.password
  this.email = user.email
  this.phone = user.phone
  this.dpi = user.dpi
  this.privileges = user.privileges
}


User.findByCredentials = (username, password, result) => {
  // var _query = ̣`select * from tbl_user where usr_username=${username} and usr_password=${password}`;
  var _query = `call VerificarUsuarioContrasena('${username}','${password}')`;
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
};


User.getUserByCredentials = (username, password, result) => {
  var _query = `SELECT tbl_user.usr_id, tbl_privileges.priv_id FROM tbl_user INNER JOIN tbl_privileges ON tbl_user.usr_privileges = tbl_privileges.priv_id where tbl_user.usr_username='${username}' and tbl_user.usr_password='${password}'`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};






module.exports = User;
