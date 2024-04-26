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

  getByEmail = async (email) => {
    const [result] = await this.model.query('SELECT * FROM usuarios WHERE email = ?', [email])
    return result
  }

  updateLastConection = async (email) => {
    const [result] = await this.model.query('INSERT TO usuarios', [email])
  }
}

// Export
module.exports = UserDao
