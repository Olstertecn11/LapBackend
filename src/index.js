const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000
const cors = require('cors')
const multer = require('multer');
const sql = require('./models/db.js');
const fs = require('fs');






// config segment
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json());
app.use(cors());
app.use('/auth', require('./routes/auth/index.js'))
app.use('/activities', require('./routes/activities/index.js'))
app.use('/class', require('./routes/classes/index.js'))


app.use(cors({ origin: 'http://localhost:5173' }))


const upload = multer({ dest: 'uploads/' });


app.post('/upload', upload.single('pdfFile'), (req, res) => {
  const pdfFile = req.file;

  if (!pdfFile) {
    return res.status(400).send('No se ha enviado ningún archivo.');
  }

  // Guardar el archivo en la base de datos
  const insertQuery = 'INSERT INTO archivos_pdf (nombre, contenido) VALUES (?, ?)';

  // Leer el contenido del archivo
  const fs = require('fs');
  const content = fs.readFileSync(pdfFile.path);

  const values = [pdfFile.originalname, content];

  sql.query(insertQuery, values, (error, results, fields) => {
    if (error) {
      console.error('Error al insertar el archivo en la base de datos:', error);
      return res.send('Error al guardar el archivo en la base de datos.');
    }

    res.send('Archivo PDF almacenado exitosamente en la base de datos.');
  });
});


app.get('/pdfs', (req, res) => {
  const selectQuery = 'SELECT nombre, contenido FROM archivos_pdf';

  sql.query(selectQuery, (error, results, fields) => {
    if (error) {
      console.error('Error al obtener los archivos PDF de la base de datos:', error);
      return res.status(500).send('Error al obtener los archivos PDF de la base de datos.');
    }
    res.json(results);
  });
});





app.listen(port, () => {
  console.log('example');
});
