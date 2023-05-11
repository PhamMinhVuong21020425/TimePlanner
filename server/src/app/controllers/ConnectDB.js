// get the client
const mysql = require('mysql2');
require('dotenv').config();

//Create the connection pool.The pool - specific settings are the defaults
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'time',
    port: 3306
});

module.exports = pool;