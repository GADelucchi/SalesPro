// Imports
const mysql = require('mysql2-promise'); // Suponiendo que usas mysql2/promise

// Class
class EmployeeDao {
  constructor(connection) {
      this.connection = connection;
  }

  get = async () => {
      const [clients] = await this.connection.query('SELECT * FROM employees');
      return clients;
  }

  getById = async (eid) => {
    const [clients] = await this.connection.query("SELECT * FROM clients WHERE id = ?", [eid])
  }
}

// Export
module.exports = EmployeeDao
