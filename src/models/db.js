const mysql = require('mysql2');
const dbConfig = require('../config/db.config.js');

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT,
  charset: 'utf8mb4'
});

module.exports = connection;


