// Imports
const { logger } = require('../config/logger');
const clientsController = require('../controllers/clients.controller');
const { RouterClass } = require('./routerClass');

// Code
class ClientsRouter extends RouterClass {
  init() {
    this.get('/', ['USER'], async (req, res) => {
      try {
        const result = await clientsController.getClients()

        if (!result) {
          throw new Error(error)
        }

        const stringifyResult = JSON.stringify(result)

        res.sendSuccess(stringifyResult)
      } catch (error) {
        logger.error(error)
      }
    })

    this.get('/:cid', ['USER'], async (req, res) => {
      try {
        const { cid } = req.params
        const result = await clientsController.getClientById(cid)

        if (!result) {
          throw new Error(error)
        }

        const stringifyResult = JSON.stringify(result)

        res.sendSuccess(stringifyResult)
      } catch (error) {
        logger.error(error)
      }
    })

    this.post('/', ['USER'], async (req, res, next) => {
      try {
        const newClient = req.body
        if (!newClient.id_cliente ||
          newClient.primer_nombre ||
          newClient.apellido ||
          newClient.fecha_nacimiento ||
          newClient.telefono ||
          newClient.email) {
          throw new Error('Faltan datos')
        }

        const result = await clientsController.createClient(newClient)

        if (!result) {
          throw new Error(error)
        }
        res.sendSuccess(result)
      } catch (error) {
        next(error)
        logger.error(error)
      }
    })

    this.put('/:cid', ['USER'], async (req, res) => {
      try {
        const { cid } = req.params
        const client = req.body

        const clientToReplace = {
          pasaporte: client.pasaporte,
          dni: client.dni,
          cuit_cuil: client.cuit_cuil,
          primer_nombre: client.primer_nombre,
          segundo_nombre: client.segundo_nombre,
          apellido: client.apellido,
          fecha_nacimiento: client.fecha_nacimiento,
          telefono: client.telefono,
          email: client.email
        }
        const result = await clientsController.updateClient(cid, clientToReplace)

        if (!result) {
          throw new Error(error)
        }
        res.sendSuccess(result)
      } catch (error) {
        logger.error(error)
      }
    })

    this.delete('/:cid', ['USER'], async (req, res) => {
      try {
        const { cid } = req.params
        const result = await clientsController.deleteCient(cid)

        if (!result) {
          throw new Error(error)
        }
        res.sendSuccess(result)
      } catch (error) {
        logger.error(error)
      }
    })
  }
}

// Export
module.exports = ClientsRouter