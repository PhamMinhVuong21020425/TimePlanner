// const mysql = require("mysql2");
// require("dotenv").config();

// const pool = mysql.createPool({
//   uri: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: true,
//   },
// });

// module.exports = pool;

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

module.exports = pool;
