// Code
class UserRepository {
  constructor(dao) {
      this.dao = dao
  }

  get = async () => await this.dao.get()

  getBySerial = async (uid) => await this.dao.getBySerial(uid)

  create = async (newUser) => await this.dao.create(newUser)

  update = async (uid, userToReplace) => await this.dao.update(uid, userToReplace)

  delete = async (uid) => await this.dao.delete(uid)
}

module.exports = {
  UserRepository
}