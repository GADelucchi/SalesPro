// Import
const { userService } = require('../service/index.service')

// Code
class UserController {
    getUsers = async () => await userService.get()

    getUserByEmail = async (email) => await userService.getByEmail(email)

    updateLastConection = async (email) => await userService.updateLastConection(email)

    createUser = async (nuevoUsuario) => await userService.create(nuevoUsuario)

    updateUser = async (uid, userToReplace) => await userService.update(uid, userToReplace)

    deleteUser = async (uid) => await userService.delete(uid)
}

// Export
module.exports = new UserController()