const sql = require('./db.js');

const Asistence = () => {
}


Asistence.create = (date, id_class, result) => {
  var query = `insert into tbl_asistence(asis_date, asis_id_class) values('${date}', '${id_class}')`;
  sql.query(query, (error, results) => {
    if (error) {
      result(error, { code: 400, msg: error, data: [] });
    }
    result(null, { code: 200, msg: 'Obteniendo estudiantes por clase', data: results });
  });
}


Asistence.getByDate = (date, result) => {
  var query = `select * from tbl_asistence where asis_date='${date}'`;
  sql.query(query, (error, results) => {
    if (error) {
      result(error, { code: 400, msg: error, data: [] });
    }
    result(null, { code: 200, msg: 'Obteniendo estudiantes por clase', data: results });
  });
}
