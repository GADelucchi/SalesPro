// Imports
const { logger } = require('../config/logger');
const clientsController = require('../controllers/clients.controller');
const { RouterClass } = require('./routerClass');

// Code
class ClientsRouter extends RouterClass {
  init() {
    this.get('/', ['PUBLIC'], async (req, res) => {
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

    this.get('/:cid', ['PUBLIC'], async (req, res) => {
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

    this.post('/', ['PUBLIC'], async (req, res, next) => {
      try {
        const newClient = req.body

        // Validación de tipo de dato ingresado (DNI, pasaporte o CUIT/CUIL)
        const identificacion = req.body.identificacion

        if (identificacion.length === 8) {
          newClient.id_cliente = null
          newClient.pasaporte = null
          newClient.dni = identificacion
          newClient.cuit_cuil = null
          delete newClient.identificacion
        } else if (identificacion.length === 11 && /^\d+$/.test(identificacion)) {
          newClient.id_cliente = null
          newClient.pasaporte = null
          newClient.dni = null
          newClient.cuit_cuil = identificacion
          delete newClient.identificacion
        } else if (/^[a-zA-Z0-9]+$/.test(identificacion)) {
          newClient.id_cliente = null
          newClient.pasaporte = identificacion
          newClient.dni = null
          newClient.cuit_cuil = null
          delete newClient.identificacion
        }

        // Si no tiene segundo nombre se define como null
        if (!newClient.segundo_nombre) {
          newClient.segundo_nombre = null
        }

        // se chequea que no falten los campos requeridos
        if (!newClient.primer_nombre ||
          !newClient.apellido ||
          !newClient.fecha_nacimiento ||
          !newClient.telefono ||
          !newClient.email) {
          throw new Error('Faltan datos')
        }

        // Se ordenan los datos en el orden que requiere la base de datos
        const desiredOrder = ['id_cliente', 'pasaporte', 'dni', 'cuit_cuil', 'primer_nombre', 'segundo_nombre', 'apellido', 'fecha_nacimiento', 'telefono', 'email'];
        const orderedClient = {};

        for (const property of desiredOrder) {
          if (property in newClient) {
            orderedClient[property] = newClient[property];
          }
        }

        // Para una mejor normalización de datos, se pasan a mayúscula los String
        const uppercaseOrderedClient = {}
        for (const propiedad in orderedClient) {
          if (typeof orderedClient[propiedad] === 'string') {
            uppercaseOrderedClient[propiedad] = orderedClient[propiedad].toUpperCase();
          } else {
            uppercaseOrderedClient[propiedad] = orderedClient[propiedad];
          }
        }

        const result = await clientsController.createClient(uppercaseOrderedClient)

        if (!result) {
          throw new Error(error)
        }

        res.sendSuccess(result)
      } catch (error) {
        next(error)
        logger.error(error)
      }
    })

    this.put('/:cid', ['PUBLIC'], async (req, res) => {
      try {
        const { cid } = req.params
        const client = req.body

        const clientToReplace = {
          id_cliente: client.id_cliente,
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

    this.delete('/:cid', ['PUBLIC'], async (req, res) => {
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