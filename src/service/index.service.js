// Imports
const ClientDaoSql = require('../dao/sql/client.dao.js')
const DeviceDaoSql = require('../dao/sql/device.dao.js')
const EmployeeDaoSql = require('../dao/sql/employee.dao.js')
const UserDaoSql = require('../dao/sql/user.dao.js')

// Code
const clientService = new ClientDaoSql()
const deviceService = new DeviceDaoSql()
const employeeService = new EmployeeDaoSql()
const userService = new UserDaoSql()

// Exports
module.exports = {
  deviceService,
  clientService,
  employeeService,
  userService
}