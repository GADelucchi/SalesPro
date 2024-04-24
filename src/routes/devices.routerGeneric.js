// Imports
const { logger } = require('../config/logger');
const devicesController = require('../controllers/devices.controller');
const { RouterClass } = require('./routerClass');

// Code
class DevicesRouter extends RouterClass {
  init() {
    this.get('/', ['PUBLIC'], async (req, res) => {
      try {
        const result = await devicesController.getDevices()

        if (!result) {
          throw new Error(error)
        }

        const stringifyResult = JSON.stringify(result)

        res.sendSuccess(stringifyResult)
      } catch (error) {
        logger.error(error)
      }
    })

    this.post('/', ['PUBLIC'], async (req, res) => {
      try {
        if (!result) {
          throw new Error(error)
        }

        const stringifyResult = JSON.stringify(result)

        res.sendSuccess(stringifyResult)
      } catch (error) {
        logger.error(error)
      }
    })

    this.put('/', ['PUBLIC'], async (req, res) => {
      try {
        if (!result) {
          throw new Error(error)
        }

        const stringifyResult = JSON.stringify(result)

        res.sendSuccess(stringifyResult)
      } catch (error) {
        logger.error(error)
      }
    })

    this.delete('/', ['PUBLIC'], async (req, res) => {
      try {
        if (!result) {
          throw new Error(error)
        }

        const stringifyResult = JSON.stringify(result)

        res.sendSuccess(stringifyResult)
      } catch (error) {
        logger.error(error)
      }
    })
  }
}

// Export
module.exports = DevicesRouter