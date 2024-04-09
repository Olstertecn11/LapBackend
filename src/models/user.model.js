
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



// ================================= CRUD Functions ================================= 


User.getUserById = (idUser, result) => {
  var _query = `select * from tbl_user where usr_id='${idUser}'`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res[0]);
  });
}



User.create = (name, surname, username, password, email, phone, dpi, role, result) => {
  var _query = `insert into tbl_user(usr_name, usr_surname,usr_username, usr_password, usr_email, usr_phone, usr_dpi, usr_privileges)values`;
  _query += `('${name}', '${surname}','${username}', '${password}','${email}', '${phone}', '${dpi}', '${role}');`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res[0]);
  });
}


User.updateProfile = (name, surname, phone, dpi, id, img, result) => {
  var _query = `update tbl_user set usr_name='${name}', usr_surname='${surname}', usr_phone='${phone}', usr_dpi='${dpi}', usr_image='${img}' where usr_id='${id}'`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, res[0]);
  });
}


User.delete = (Id, result) => {
  var _query = `delete from tbl_user where usr_id='${Id}'`;
  sql.query(_query, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res[0]);
  });
}



User.getAllUsers = (result) => {
  var _query = `select * from tbl_user`;
  sql.query(_query, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
}






// ================================= Auth Functions ================================= 


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
  var _query = `SELECT tbl_user.usr_image, tbl_user.usr_name, tbl_user.usr_id, tbl_privileges.priv_id FROM tbl_user INNER JOIN tbl_privileges ON tbl_user.usr_privileges = tbl_privileges.priv_id where tbl_user.usr_username='${username}' and tbl_user.usr_password='${password}'`;
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
