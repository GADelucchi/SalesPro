// Imports
const { Router } = require('express');
const ViewRouter = require('./views.routerGeneric');
const DevicesRouter = require('./devices.routerGeneric');
const ClientsRouter = require('./clients.routerGeneric');
const EmployeesRouter = require('./employees.routerGeneric');
const UsersRouter = require('./users.routerGeneric');
const SessionsRouter = require('./session.routerGeneric');

// Declaration
const router = Router()
const viewsRouter = new ViewRouter()
const devicesRouter = new DevicesRouter()
const clientsRouter = new ClientsRouter()
const employeesRouter = new EmployeesRouter()
const usersRouter = new UsersRouter()
const sessionsRouter = new SessionsRouter()

// Code
router.use('/', viewsRouter.getRouter())

router.use('/api/clients', clientsRouter.getRouter())

router.use('/api/devices', devicesRouter.getRouter())

router.use('/api/employees', employeesRouter.getRouter())

router.use('/api/users', usersRouter.getRouter())

router.use('/api/sessions', sessionsRouter.getRouter())

// Exports
module.exports = router