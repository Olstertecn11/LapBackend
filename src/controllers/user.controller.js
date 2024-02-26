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
          res.send({ token_val, result, id_usr: data.usr_id });
        });
      }
      else {
        res.send({ token_val: '', data, id_usr: 0 });
      }
    }
  })
}
