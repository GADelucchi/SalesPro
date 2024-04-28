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
    const [result] = await this.model.query('INSERT INTO usuarios', [email])
    return result
  }

  create = async (nuevoUsuario) => {
    const { id_usuario, nombre, apellido, email, password } = nuevoUsuario
    const [result] = await this.model.query('INSERT INTO usuarios VALUES (?, ?, ?, ?, ?)', [id_usuario, nombre, apellido, email, password])
    return result
  }
}

// Export
module.exports = UserDao
