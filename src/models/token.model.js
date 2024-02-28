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

module.exports = Token;

