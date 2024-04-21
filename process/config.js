// Imports
const dotenv = require("dotenv")
const { commander } = require("./commander")
const { mode } = commander.opts()

// Config
dotenv.config({
    path: mode === 'development' ? './.env.dev' : './.env.prod'
})

// Declarartion
const port = process.env.PORT
const enviroment = process.env.ENVIROMENT
const jwtPrivateKey = process.env.JWT_PRIVATE_KEY
const persistence = process.env.PERSISTENCE
const mongoUrl = process.env.MONGO_URL_LOCAL
const SqlPassword = process.env.SQL_PASSWORD


// Exports
module.exports = {
    port,
    enviroment,
    jwtPrivateKey,
    persistence,
    mongoUrl,
    SqlPassword
}
