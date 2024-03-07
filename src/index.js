const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000
const cors = require('cors')
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
app.use('/', require('./routes/files/index.js'))


app.use(cors({ origin: 'http://localhost:5173' }))






app.listen(port, () => {
  console.log('example');
});
