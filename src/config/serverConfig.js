// Imports
const mysql = require('mysql2');
const { SqlPassword, SqlHost, SqlUser, SqlDatabase, SqlPort } = require('../../process/config');
const { logger } = require('./logger');

// Code 
const connection = mysql.createConnection({
    host: SqlHost,
    port: SqlPort,
    user: SqlUser,
    password: SqlPassword,
    database: SqlDatabase,
    supportBigNumbers: true,
    dateStrings: true,
    // debug: true
    // trace: true
    // insecureAuth: true
}).promise()

// Export
module.exports = connection