// Imports
const { logger } = require(`../config/logger`);
const clientsController = require(`../controllers/clients.controller`);
const { RouterClass } = require(`./routerClass`);

// Code
class ClientsRouter extends RouterClass {
  init() {
    this.get(`/`, [`PUBLIC`], async (req, res) => {
      const clients = await clientsController.getClients()
      logger.info(clients)

      res.status(200).send({
        status: "Success",
        message: "Entrando en GET clientes"
      })
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
module.exports = ClientsRouter