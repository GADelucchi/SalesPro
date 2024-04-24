// Import
const { userService } = require('../service/index.service')

// Code
class UserController {
    getUsers = async () => await userService.get()

    getUsersPaginated = async (limit, page, category, sort) => await userService.getPaginated(limit, page, category, sort)

    getUserById = async (uid) => await userService.getById(uid)

    createUser = async (newUser) => await userService.create(newUser)

    updateUser = async (uid, userToReplace) => await userService.update(uid, userToReplace)

    deleteUser = async (uid) => await userService.delete(uid)
}

// Export
module.exports = new UserController()