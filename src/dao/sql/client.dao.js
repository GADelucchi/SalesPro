// Imports
const mysql = require('mysql2-promise'); // Suponiendo que usas mysql2/promise

// Class
class ClientDao {
  constructor(connection) {
      this.connection = connection;
  }

  get = async () => {
      const [clients] = await this.connection.query('SELECT * FROM clients');
      return clients;
  }

  getById = async (cid) => {
    const [clients] = await this.connection.query("SELECT * FROM clients WHERE id = ?", [cid])
  }
}

// Export
module.exports = ClientDao
