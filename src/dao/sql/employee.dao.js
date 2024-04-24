// Imports
const connection = require('../../config/serverConfig');

// Class
class EmployeeDao {
  constructor() {
      this.model = connection;
  }

  get = async () => {
      const [result] = await this.model.query('SELECT * FROM empleados');
      return result;
  }

  getBySerial = async (eid) => {
    const [result] = await this.model.query('SELECT * FROM empleados WHERE id = ?', [eid])
    return result
  }
}

// Export
module.exports = EmployeeDao
