// Import
const { deviceService } = require('../service/index.service')

// Code
class DeviceController {
    getDevices = async () => await deviceService.get()

    getDevicesPaginated = async (limit, page, category, sort) => await deviceService.getPaginated(limit, page, category, sort)

    getDeviceBySerial = async (did) => await deviceService.getBySerial(did)

    createDevice = async (newDevice) => await deviceService.create(newDevice)

    updateDevice = async (did, deviceToReplace) => await deviceService.update(did, deviceToReplace)

    deleteDevice = async (did) => await deviceService.delete(did)
}

// Export
module.exports = new DeviceController()