const Comment = require('../models/comment.model.js');


exports.create = (req, res) => {
  const { content, file, user, _class } = req.body;
  if (!content || !file || !user) {
    return res.send({ msg: 'missing dependencies' })
  }
  Comment.create(content, file, user, _class, (err, data) => {
    if (err) {
      return res.send({ status: false, msg: err })
    }
    res.send({ status: true, msg: 'Created' })
  });



}

exports.getByClassAndPdf = (req, res) => {
  const { idClass, idPdf } = req.query;
  if (!idClass || !idPdf) {
    res.send({ msg: 'missing dependencies' })
  }
  Comment.getByClassAndPdf(idClass, idPdf, (err, data) => {
    if (err) {
      return res.send({ status: false, msg: err })
    }
    return res.send({ status: true, data })
  });
}




