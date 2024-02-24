// // MySQL
// // get the client
// const mysql = require('mysql2');
// require('dotenv').config();

// //Create the connection pool.The pool - specific settings are the defaults
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'time',
//     port: 3306
// });

// module.exports = pool;

// PostgreSQL
// get the client
const { Pool } = require('pg');
require('dotenv').config();

//Create the connection pool.The pool - specific settings are the defaults
const pool = new Pool({
    host: process.env.PGHOST || 'localhost',
    user: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || '',
    database: process.env.PGDATABASE || 'time_planner',
    port: process.env.PGPORT || 5432
});

module.exports = pool;