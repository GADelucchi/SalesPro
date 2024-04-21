// Imports
const mysql = require('mysql');
const { SqlPassword } = require('../../process/config');
const { logger } = require('./logger');

// Export
module.exports = {
    connectDB: async () => {
        try {
            const connection = mysql.createConnection({
                host: 'localhost:3306',
                user: 'root',
                password: SqlPassword,
                database: 'apple_store_la_plata_bs_as',
            });

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
        } catch (error) {
            logger.error(error);
        }
    }
};
