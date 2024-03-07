const File = require('../models/file.model.js');




exports.upload = (req, res) => {
  const pdfFile = req.file;
  console.log(req);
  const { id } = req.query;
  console.log(id);

  if (!pdfFile) {
    return res.status(400).send('No se ha enviado ningún archivo.');
  }

  File.saveFile(pdfFile, id, (error, data) => {
    if (error) {
      res.send(error);
    }
    res.send(data);
  });

}


exports.getAllFiles = (req, res) => {

  File.getFiles((error, data) => {
    res.send(data);
  });
}
