const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true,
  },
});

module.exports = pool;
