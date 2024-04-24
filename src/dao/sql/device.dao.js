// Imports
const connection = require('../../config/serverConfig');

// Class
class DeviceDao {
  constructor() {
      this.model = connection;
  }

  get = async () => {
      const [result] = await this.model.query('SELECT * FROM equipos');
      return result;
  }

  getBySerial = async (did) => {
    const [result] = await this.model.query('SELECT * FROM equipos WHERE id = ?', [did])
    return result
  }
}

// Export
module.exports = DeviceDao
