const sql = require('./db.js');

const File = {

};



File.saveFile = (pdfFile, id, result) => {
  const insertQuery = 'INSERT INTO archivos_pdf (nombre, contenido, id_clase) VALUES (?, ?, ?)';

  const fs = require('fs');
  const content = fs.readFileSync(pdfFile.path);

  const values = [pdfFile.originalname, content, id];

  sql.query(insertQuery, values, (error, results, fields) => {
    if (error) {
      result(error, null);
    }
    else {
      result(null, results);
    }
  });
}


File.updateFile = (pdfFile, id, result) => {
  const updateQuery = 'UPDATE archivos_pdf SET contenido = ? WHERE id = ?';

  const fs = require('fs');
  const content = fs.readFileSync(pdfFile.path);

  const values = [content, id];

  sql.query(updateQuery, values, (error, results, fields) => {
    if (error) {
      result(error, null);
    } else {
      result(null, results);
    }
  });
}


File.getFiles = (result) => {
  const selectQuery = 'SELECT * FROM archivos_pdf';

  sql.query(selectQuery, (error, results, fields) => {
    if (error) {
      result(error, null);
    }
    result(null, results);
  });
}


File.deleteFile = (id, result) => {
  const query = 'delete  FROM archivos_pdf where id=?';

  sql.query(query, id, (error, results, fields) => {
    if (error) {
      result(error, null);
    }
    result(null, results);
  });
}

module.exports = File;
