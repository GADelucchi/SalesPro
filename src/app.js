// Imports
const express = require("express")
const { Server } = require("socket.io")
const handlebars = require("express-handlebars")
const cors = require("cors")
const morgan =require("morgan")
const cookieParser = require("cookie-parser")
const passport = require("passport")
const { port } = require("../process/config")

// Instance
const app = express()

// Config
app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

// Others middleware
app.use(cookieParser("S3cr3tW0rd"))

// Passport
passport.use(passport.initialize())

// Port
const httpServer = app.listen(port, (error) => {
  if (error) console.log(`Error en el servidor`, error)
  console.log(`Escuchando en el puerto: ${port}`);
})