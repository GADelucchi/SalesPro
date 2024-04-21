// Code
class DeviceRepository {
  constructor(dao) {
      this.dao = dao
  }

  get = async () => await this.dao.get()

  getBySerial = async (did) => await this.dao.getBySerial(did)

  create = async (newDevice) => await this.dao.create(newDevice)

  update = async (did, deviceToReplace) => await this.dao.update(did, deviceToReplace)

  delete = async (did) => await this.dao.delete(did)
}

module.exports = {
  DeviceRepository
}