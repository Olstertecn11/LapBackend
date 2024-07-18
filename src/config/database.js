const { Sequilize } = require('sequilize');
const dbConfig = require('./db.config');



const sequilize = new Sequilize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'mysql',
  port: dbConfig.PORT
});

module.exports = sequilize;
