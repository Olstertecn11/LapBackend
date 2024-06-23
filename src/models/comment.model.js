
const sql = require('./db.js');

const Comment = (_class) => {
}



Comment.create = (content, file, user, _class, result) => {
  var _query = `insert into tbl_comments(content, id_archivo, id_usuario, id_class, fecha)values('${content}', '${file}', '${user}', '${_class}', CURDATE())`;
  sql.query(_query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    result(null, res);
  });
}

Comment.getByClassAndPdf = (idClass, idPdf, result) => {
  const selectQuery = `
  select tbl_user.usr_name, tbl_comments.content from sql5697981.tbl_comments inner join tbl_user on tbl_comments.id_usuario = tbl_user.usr_id
  inner join tbl_class on tbl_comments.id_class = tbl_class.cls_id inner join archivos_pdf
    on tbl_comments.id_archivo = archivos_pdf.id where tbl_comments.id_class = ${idClass} and archivos_pdf.id = ${idPdf};
 `
  sql.query(selectQuery, (error, results, fields) => {
    if (error) {
      result(error, null);
    }
    result(null, results);
  });
}



module.exports = Comment;
