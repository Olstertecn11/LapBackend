const File = require('../models/file.model.js');




exports.upload = (req, res) => {
  const pdfFile = req.file;
  const { id } = req.query;

  if (!pdfFile) {
    return res.status(400).send('No se ha enviado ningún archivo.');
  }

  File.saveFile(pdfFile, id, (error, data) => {
    if (error) {
      return res.send(error); // Cambiado res.send(error) a res.status(500).send(error)
    }
    res.send(data);
  });
};

exports.update = (req, res) => {
  const pdfFile = req.file;
  const { id } = req.query;

  if (!pdfFile) {
    return res.status(400).send('No se ha enviado ningún archivo.');
  }

  File.updateFile(pdfFile, id, (error, data) => {
    if (error) {
      return res.send(error);
    }
    res.send(data);
  });
};



exports.getAllFiles = (req, res) => {
  File.getFiles((error, data) => {
    res.send(data);
  });
}

exports.deleteFileById = (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.send('missing id');
  }
  else {
    File.deleteFile(id, (error, data) => {
      if (error) {
        return res.send({ code: 0, mscode: 1, msg: error });
      }
      else {
        res.send({ code: 1, msg: data });
      }
    });
  }
}
