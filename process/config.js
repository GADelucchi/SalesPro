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
const SqlPassword = process.env.SQL_PASSWORD
const SqlHost = process.env.SQL_HOST
const SqlUser = process.env.SQL_USER
const SqlDatabase = process.env.SQL_DATABASE
const SqlPort = process.env.SQL_PORT


// Exports
module.exports = {
    port,
    enviroment,
    jwtPrivateKey,
    persistence,
    SqlPassword,
    SqlHost,
    SqlUser,
    SqlDatabase,
    SqlPort
}
