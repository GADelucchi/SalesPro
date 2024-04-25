// Imports
const ClientDaoSql = require('../dao/sql/client.dao.js')
const DeviceDaoSql = require('../dao/sql/device.dao.js')
const EmployeeDaoSql = require('../dao/sql/employee.dao.js')
const UserDaoSql = require('../dao/sql/user.dao.js')
const SessionDaoSql = require('../dao/sql/session.dao.js')

// Code
const clientService = new ClientDaoSql()
const deviceService = new DeviceDaoSql()
const employeeService = new EmployeeDaoSql()
const userService = new UserDaoSql()
const sessionService = new SessionDaoSql()

// Exports
module.exports = {
  deviceService,
  clientService,
  employeeService,
  userService,
  sessionService
}