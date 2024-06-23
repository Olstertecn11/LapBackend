const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000
const cors = require('cors')
const sql = require('./src/models/db.js');
const fs = require('fs');






// config segment
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json());
app.use(cors());
app.use('/auth', require('./src/routes/auth/index.js'))
app.use('/activities', require('./src/routes/activities/index.js'))
app.use('/class', require('./src/routes/classes/index.js'))
app.use('/user', require('./src/routes/user/index.js'))
app.use('/subject', require('./src/routes/subject/index.js'))
app.use('/degree', require('./src/routes/degree/index.js'))
app.use('/register', require('./src/routes/register/index.js'))
app.use('/comments', require('./src/routes/comments/index.js'))
app.use('/', require('./src/routes/files/index.js'))


app.use(cors())
app.use(cors({ origin: 'http://localhost:5173' }))
app.get('', (req, res) => {
  res.send({ message: 'Testing working' });
})






app.listen(port, () => {
  console.log('example');
});
