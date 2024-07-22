const sql = require('./db.js');

const Student = () => {
}

Student.create = (name, surname, id_class, result) => {
  var query = `insert into tbl_student(stu_id, stu_name, stu_surname, stu_id_class)values `;
  query += `('${name}', '${surname}', '${id_class}')`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    result(null, res);
  });
}

Student.getByClass = (id_class, result) => {
  var query = `select * from tbl_student where stu_id_clase='${id_class}'`;
  sql.query(query, (error, results) => {
    if (error) {
      result(error, { code: 400, msg: error, data: [] });
    }
    result(null, { code: 200, msg: 'Obteniendo estudiantes por clase', data: results });
  });
}

Student.all = (result) => {
  var query = "select * from tbl_student";
  sql.query(query, (error, results, fields) => {
    if (error) {
      result(error, null);
    }
    result(null, results);
  });

}


module.exports = Student;


