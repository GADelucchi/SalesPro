// Imports
const bcrypt = require('bcrypt')

// Export creación del hash
exports.createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

// Exports comparación
exports.isValidPassword = (password, user) => {
    return bcrypt.compareSync(password, user.password)
}