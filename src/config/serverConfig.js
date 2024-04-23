// Imports
const mysql = require('mysql');
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
})

async function connectDB() {
    connection.connect((err) => {
        if (err) {
            logger.error('Error al conectar con MySQL:', err);
            return;
        }

        logger.info('MySQL conectado');

        // Haz que el objeto de conexión esté disponible para los DAO si es necesario
        // (asumiendo que tus DAOs requieren un objeto de conexión)
        // ClientDao.setConnection(connection);
        // ... (similar para otros DAO)
    });

    // connection.query('SELECT * FROM clientes', (err, results, fields) => {
    //     if(err) {
    //         logger.error('Error: ' + err.stack);
    //         return;
    //     }
    //     logger.info('Result: ', results)
    // })
}

// Export
module.exports = {
    connectDB,
    connection
};