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

// Exports
module.exports = {
    port,
    enviroment,
    jwtPrivateKey
}
