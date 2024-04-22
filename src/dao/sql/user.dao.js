// Imports
const mysql = require('mysql2-promise'); // Suponiendo que usas mysql2/promise

// Class
class UserDao {
  constructor(connection) {
      this.connection = connection;
  }

  get = async () => {
      const [clients] = await this.connection.query('SELECT * FROM users');
      return clients;
  }

  getById = async (uid) => {
    const [clients] = await this.connection.query("SELECT * FROM clients WHERE id = ?", [uid])
  }
}

// Export
module.exports = UserDao
