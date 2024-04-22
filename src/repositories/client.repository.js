// Code
class ClientRepository {
  constructor(dao) {
      this.dao = dao
  }

  get = async () => await this.dao.get()

  getById = async (cid) => await this.dao.getById(cid)

  create = async (newClient) => await this.dao.create(newClient)

  update = async (cid, clientToReplace) => await this.dao.update(cid, clientToReplace)

  delete = async (cid) => await this.dao.delete(cid)
}

module.exports = {
  ClientRepository
}