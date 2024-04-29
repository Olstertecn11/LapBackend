var express = require('express');
var router = express.Router()
const User = require('../../models/user.model');
const Token = require('../../models/token.model');
const { generateFromEmail, generateUsername } = require("unique-username-generator");
const EmailHelper = require('../../helpers/EmailHelper');

router.post('/', (req, res) => {
  const { email, password, accessCode } = req.body;
  const username = generateFromEmail(email, 10);
  Token.FindAccessCode(accessCode, (err, data) => {
    if (err) {
      return res.send({ status: true, message: data });
    }
    User.create('', '', username, password, email, '', '', 2, (err, data) => {
      if (err) {
        EmailHelper.registerUser(email, username);
        return res.send({ status: false, message: 'Creado Correctamente' });
      }
      return res.send({ status: true, message: data });
    });
  });

});


module.exports = router;
