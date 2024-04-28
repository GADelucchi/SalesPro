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

  create = async (newClient) => {
    const { id_cliente, pasaporte, dni, cuit_cuil, primer_nombre, segundo_nombre, apellido, fecha_nacimiento, telefono, email } = newClient
    const [result] = await this.model.query('INSERT INTO clientes VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
    [id_cliente, pasaporte, dni, cuit_cuil, primer_nombre, segundo_nombre, apellido, fecha_nacimiento, telefono, email])
    return result
  }
}

// Export
module.exports = ClientDao
