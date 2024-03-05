const User = require('../models/user.model.js');
const Token = require('../models/token.model.js');
const crypto = require('crypto');


exports.userExist = (req, res) => {
  const { username, password } = req.body;
  User.findByCredentials(username, password, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.send({ message: 'No encontrado', code: 0, token: null });
      } else {
        return res.send({ message: 'No', code: -1, token: null });
      }
    } else {
      let result = Object.values(JSON.parse(JSON.stringify(data)));
      result = result[0].resultado;
      if (result == 3) {
        const token_val = crypto.randomBytes(33).toString('hex');
        User.getUserByCredentials(username, password, (err, data) => {
          Token.createToken(token_val, data.usr_id)
          res.send({ token_val, result, id_usr: data.usr_id, credentials: data.priv_id });
        });
      }
      else {
        res.send({ token_val: '', data, id_usr: 0 });
      }
    }
  })
}


exports.closeUserSession = (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.send({ msg: 'missing dependencies' })
  }
  Token.deleteToken(id, (err, data) => {
    if (err) {
      console.log('err');
      console.log(err);
      res.send({ msg: err })
    }
    else {
      console.log('data');
      console.log(data);
      res.send({ msg: data })
    }
  });
}


exports.hasSession = (req, res) => {
  const { idUser, token } = req.query;
  Token.getTokenBySession(idUser, token, (err, data) => {
    if (err) {
      console.log(err)
    }
    else {
      return res.send(data == 0 ? { exist: false } : { exist: true });
    }
  });
}


