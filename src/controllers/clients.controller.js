// Import
const { clientService } = require('../service/index.service')

// Code
class CientController {
    getClients = async () => await clientService.get()

    getClientsPaginated = async (limit, page, category, sort) => await clientService.getPaginated(limit, page, category, sort)

    getClientById = async (cid) => await clientService.getById(cid)

    createClient = async (newClient) => await clientService.create(newClient)

    updateClient = async (cid, clientToReplace) => await clientService.update(cid, clientToReplace)

    deleteCient = async (cid) => await clientService.delete(cid)
}

// Export
module.exports = new CientController()