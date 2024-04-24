// Imports
const connection = require('../../config/serverConfig.js');

// Class
class ClientDao {
  constructor() {
    this.model = connection;
  }

  get = async () => {
    const [result] = await this.model.query('SELECT * FROM clientes');
    return result;
  }

  getById = async (cid) => {
    const [result] = await this.model.query('SELECT * FROM clientes WHERE id_cliente = ?', [cid])
    return result
  }
}

// Export
module.exports = ClientDao
