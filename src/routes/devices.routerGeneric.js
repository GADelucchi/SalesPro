// Imports
const { logger } = require(`../config/logger`);
const devicesController = require(`../controllers/devices.controller`);
const { RouterClass } = require(`./routerClass`);

// Code
class DevicesRouter extends RouterClass {
  init() {
    this.get(`/`, [`PUBLIC`], async (req, res) => {
      const devices = await devicesController.getDevices()
    })

    this.post(`/`, [`PUBLIC`], async (req, res) => {

    })

    this.put(`/`, [`PUBLIC`], async (req, res) => {

    })

    this.delete(`/`, [`PUBLIC`], async (req, res) => {

    })
  }
}

// Export
module.exports = DevicesRouter