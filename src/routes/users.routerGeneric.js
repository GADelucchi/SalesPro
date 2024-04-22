// Imports
const { logger } = require(`../config/logger`);
const usersController = require(`../controllers/users.controller`);
const { RouterClass } = require(`./routerClass`);

// Code
class UsersRouter extends RouterClass {
  init() {
    this.get(`/`, [`PUBLIC`], async (req, res) => {
      const devices = await usersController.getDevices()
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
module.exports = UsersRouter