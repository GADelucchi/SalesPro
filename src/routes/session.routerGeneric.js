// Imports
const { logger } = require('../config/logger');
const sessionsController = require('../controllers/sessions.controller');
const { RouterClass } = require('./routerClass');

// Code
class SessionsRouter extends RouterClass {
  init() {
    this.get('/login', ['PUBLIC'], async (req, res) => {
      try {
        const result = await sessionsController.getDevices()

        if (!result) {
          throw new Error(error)
        }

        res.sendSuccess()
      } catch (error) {
        logger.error(error)
      }
    })

    this.get('/register', ['PUBLIC'], async (req, res) => {
      try {
        if (!result) {
          throw new Error(error)
        }

        res.sendSuccess()
      } catch (error) {
        logger.error(error)
      }
    })

    this.get('/initRestorePass', ['PUBLIC'], async (req, res) => {
      try {
        if (!result) {
          throw new Error(error)
        }

        res.sendSuccess()
      } catch (error) {
        logger.error(error)
      }
    })

    this.delete('/', ['PUBLIC'], async (req, res) => {
      try {
        if (!result) {
          throw new Error(error)
        }

        res.sendSuccess()
      } catch (error) {
        logger.error(error)
      }
    })
  }
}

// Export
module.exports = SessionsRouter