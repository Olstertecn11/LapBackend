const User = require('../models/user.model.js');


exports.userExist = (req, res) => {
  const { username, password } = req.body;
  User.findByCredentials(username, password, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.send({ message: 'No encontrado', code: 0, token: null });
      } else {
        return res.send({ message: 'No', code: -1, token: null });
      }
    } else res.send(data);
  })
}
