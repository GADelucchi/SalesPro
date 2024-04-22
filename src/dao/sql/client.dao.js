// Imports

// Class
class ClientDao {
  constructor(connection) {
      this.connection = connection;
  }

  get = async () => {
      const [clients] = await this.connection.query("SELECT * FROM clientes");
      return clients;
  }

  getById = async (cid) => {
    const [clients] = await this.connection.query("SELECT * FROM clients WHERE id = ?", [cid])
  }
}

// Export
module.exports = ClientDao
