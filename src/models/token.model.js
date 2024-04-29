const sql = require('./db.js');
const crypto = require('crypto');



const Token = (token) => {
  this.id = token.id
  this.username = token.value
  this.id_user = token.id_user
}


Token.createToken = (token_val, id_usr) => {
  var _query = `insert into tbl_session_token(stk_value,stk_id_user)values('${token_val}','${id_usr}')`;
  sql.query(_query, (err, result) => {
    console.log(result);
  })
}





Token.deleteToken = (id_usr, result) => {
  var _query = `delete from tbl_session_token where stk_id_user='${id_usr}'`;
  sql.query(_query, (err, res) => {
    if (err) {
      result(err, null);
    }
    else {
      result(null, res);
    }
  })
}

Token.getTokenBySession = (idUser, token, result) => {
  var _query = `select COUNT(*) AS rowCount from tbl_session_token where stk_id_user='${idUser}' and stk_value='${token}'`;
  sql.query(_query, (err, res) => {
    if (err) {
      result(err, null);
    }
    else {
      console.log('res');
      console.log(res);
      result(null, res[0].rowCount);
    }
  })
}

Token.getTokenByUser = (idUser, result) => {
  var _query = `select COUNT(*) AS rowCount from tbl_session_token where stk_id_user='${idUser}'`;
  sql.query(_query, (err, res) => {
    if (err) {
      result(err, null);
    }
    else {
      result(null, res[0].rowCount);
    }
  })
}

Token.FindAccessCode = (code, result) => {
  var _query = `select * from tbl_codigo_acceso where codigo='${code}'`;
  sql.query(_query, (err, res) => {
    if (err) {
      result(err, null);
    }
    else {
      result(null, res[0].rowCount);
    }
  })
}

module.exports = Token;

