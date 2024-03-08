const File = require('../models/file.model.js');




exports.upload = (req, res) => {
  const pdfFile = req.file;
  const { id } = req.query;

  if (!pdfFile) {
    return res.status(400).send('No se ha enviado ningún archivo.');
  }

  File.saveFile(pdfFile, id, (error, data) => {
    if (error) {
      return res.status(500).send(error); // Cambiado res.send(error) a res.status(500).send(error)
    }
    res.send(data);
  });
};


exports.getAllFiles = (req, res) => {

  File.getFiles((error, data) => {
    res.send(data);
  });
}
