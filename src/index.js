const express = require('express')
const app = express();
const port = 3000
const cors = require('cors')



// config segment

app.use(cors());
app.use('/auth', require('./routes/auth/index.js'))
app.use(cors({ origin: 'http://localhost:5173' }))



app.listen(port, () => {
  console.log('example');
});
