// Imports
const connection = require('../../config/serverConfig');

// Class
class UserDao {
  constructor() {
      this.model = connection;
  }

  get = async () => {
      const [result] = await this.model.query('SELECT * FROM usuarios');
      return result;
  }

  getBySerial = async (uid) => {
    const [result] = await this.model.query('SELECT * FROM usuarios WHERE id = ?', [uid])
    return result
  }
}

// Export
module.exports = UserDao
