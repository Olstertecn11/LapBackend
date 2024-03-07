const sql = require('./db.js');

const File = {

};



File.saveFile = (pdfFile, result) => {
  const insertQuery = 'INSERT INTO archivos_pdf (nombre, contenido) VALUES (?, ?)';

  const fs = require('fs');
  const content = fs.readFileSync(pdfFile.path);

  const values = [pdfFile.originalname, content];

  sql.query(insertQuery, values, (error, results, fields) => {
    if (error) {
      result(error, null);
    }
    else {
      result(null, results);
    }
  });
}


File.getFiles = (result) => {
  const selectQuery = 'SELECT nombre, contenido FROM archivos_pdf';

  sql.query(selectQuery, (error, results, fields) => {
    if (error) {
      result(error, null);
    }
    result(null, results);
  });
}



module.exports = File;
