// Imports
const mysql = require('mysql2-promise'); // Suponiendo que usas mysql2/promise

// Class
class DeviceDao {
  constructor(connection) {
      this.connection = connection;
  }

  get = async () => {
      const [clients] = await this.connection.query('SELECT * FROM devices');
      return clients;
  }

  getBySerial = async (did) => {
    const [clients] = await this.connection.query("SELECT * FROM clients WHERE id = ?", [did])
  }
}

// Export
module.exports = DeviceDao
