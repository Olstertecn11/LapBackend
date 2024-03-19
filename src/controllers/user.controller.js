const User = require('../models/user.model.js');
const Token = require('../models/token.model.js');
const crypto = require('crypto');
const { generateFromEmail, generateUsername } = require("unique-username-generator");


// CRUD Functions
exports.newUser = (req, res) => {
  const { password, email, privileges } = req.body;
  if (!password || !email || !privileges) {
    return res.send({ message: 'Missing Dependencies' });
  }
  const username = generateFromEmail(email, 3);
  User.create('', '', username, password, email, '', '', privileges, (err, data) => {
    if (err) {
      return res.send({ status: false, message: 'Creado Correctamente' });
    }
    res.send({ status: true, message: data });
  });
}




exports.deleteUser = (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.send({ code: 0, message: 'Missing Id dependencie' });
  }
  User.delete(id, (error, data) => {
    if (error) {
      return res.send({ code: 0, message: error });
    }
    res.send({ code: 0, message: 'Elminado Correctamente' });
  });
}


exports.updateUserProfile = (req, res) => {
  console.log(req);
  const { name, surname, phone, dpi, id, img } = req.body;
  if (name == undefined || surname == undefined || phone == undefined || dpi == undefined || id == undefined || img == undefined) {
    return res.send({ message: 'Missing Dependencies' });
  }
  User.updateProfile(name, surname, phone, dpi, id, img, (error, data) => {
    if (error) {
      return res.send({ code: 0, message: 'Error actualizando al usuario' + error });
    }
    res.send({ code: 1, message: 'Actualizado correctamente' })

  });
}




exports.getAll = (req, res) => {
  User.getAllUsers((error, data) => {
    if (error) {
      return res.send({ status: false, message: error })
    }
    res.send({ status: true, data: data });
  });
}









//Auth Functions







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
          res.send({ token_val, result, id_usr: data.usr_id, credentials: data.priv_id, username: data.usr_name });
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


exports.hasActiveSession = (req, res) => {
  const { idUser } = req.query;
  Token.getTokenByUser(idUser, (err, data) => {
    if (err) {
      console.log(err)
    }
    else {
      return res.send(data === 0 ? { exist: false } : { exist: true });
    }
  });
}

exports.getUserAttributes = (req, res) => {
  const { idUser } = req.query;
  User.getUserById(idUser, (error, data) => {
    if (error) {
      return res.send({ code: 0, message: error });
    }
    res.send({ code: 1, data })
  });
}





