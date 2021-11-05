const { MongoClient } = require('mongodb');
require('dotenv').config();

const { MONGO_DB_URL, DB_NAME } = process.env

let db = null;

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS)
  .then((conn) => {
  db = conn.db(DB_NAME);
  return db;
  }));

module.exports = connection;