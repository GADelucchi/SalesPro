// Imports
const { logger } = require('../config/logger');
const sessionsController = require('../controllers/sessions.controller');
const usersController = require('../controllers/users.controller');
const { isValidPassword, createHash } = require('../utils/bcryptHash');
const { generateToken } = require('../utils/jwt');
const { RouterClass } = require('./routerClass');

// Code
class SessionsRouter extends RouterClass {
  init() {
    this.post('/ingresar', ['PUBLIC'], async (req, res) => {
      try {
        const { email, password } = req.body
        let userDB = await usersController.getUserByEmail(email)

        if (!userDB) {
          return res.status(401).send({
            status: 'Error',
            message: 'Usuario no encontrado'
          })
        }

        if (!isValidPassword(password, userDB)) {
          return res.status(401).send({
            status: 'Error',
            message: 'Contraseña incorrecta'
          })
        }

        await usersController.updateLastConection(email)

        const tokenUsuario = {
          id: userDB.id,
          nombre: userDB.nombre,
          apellido: userDB.apellido,
          email: userDB.email,
          rol: userDB.id,
        }

        const token_acceso = generateToken(tokenUsuario)

        if (req.cookies.token_acceso) {
          const token = req.cookies.token_acceso
          jwtPrivateKey.verify(token, jwtPrivateKey, (error, credential) => {
            userDB = credential.user
          })
        }

        res.cookie('tokenAcceso', token_acceso, { expiresIn: '1d', httpOnly: true })
          .render('home')
      } catch (error) {
        logger.error(error)
      }
    })

    this.post('/registrar', ['PUBLIC'], async (req, res) => {
      try {
        const {
          nombre,
          apellido,
          email,
          password,
        } = req.body

        const existeUsuario = await usersController.getUserByEmail(email)

        if (existeUsuario.length > 0) {
          throw new Error('Email ya registrado')
        }

        const nuevoUsuario = {
          id_usuario: null,
          nombre: nombre,
          apellido: apellido,
          email: email,
          password: createHash(password),
        }

        const usuarioMayuscula = {}
        for (const propiedad in nuevoUsuario) {
          if (typeof nuevoUsuario[propiedad] === 'string') {
            usuarioMayuscula[propiedad] = nuevoUsuario[propiedad].toUpperCase();
          } else {
            usuarioMayuscula[propiedad] = nuevoUsuario[propiedad];
          }
        }

        const resultUsuario = await usersController.createUser(usuarioMayuscula)

        if (resultUsuario.insertId > 0) {
          const tokenUsuario = {
            nombre: usuarioMayuscula.first_name,
            apellido: usuarioMayuscula.last_name,
            email: usuarioMayuscula.email,
          }
          const regiter_token = generateToken(tokenUsuario)

          res.status(200).render('landing')
        } else {
          throw new Error('No se pudo crear el usuario')
        }
      } catch (error) {
        logger.error(error)
      }
    })

    this.get('/initRestorePass', ['PUBLIC'], async (req, res) => {
      try {
        if (!result) {
          throw new Error(error)
        }

        res.sendSuccess()
      } catch (error) {
        logger.error(error)
      }
    })

    this.delete('/', ['PUBLIC'], async (req, res) => {
      try {
        if (!result) {
          throw new Error(error)
        }

        res.sendSuccess()
      } catch (error) {
        logger.error(error)
      }
    })
  }
}

// Export
module.exports = SessionsRouter