// Import
const { sessionService } = require('../service/index.service')

// Code
class DeviceController {
    postLogin = async () => await sessionService.get()

    getDevicesPaginated = async (limit, page, category, sort) => await sessionService.getPaginated(limit, page, category, sort)

    getDeviceBySerial = async (did) => await sessionService.getBySerial(did)

    createDevice = async (newDevice) => await sessionService.create(newDevice)

    updateDevice = async (did, deviceToReplace) => await sessionService.update(did, deviceToReplace)

    deleteDevice = async (did) => await sessionService.delete(did)
}

// Export
module.exports = new DeviceController()