// Imports
const { DeviceDao, ClientDao, EmployeeDao, UserDao } = require("../dao/factory");
const { DeviceRepository } = require("../repositories/device.repository");
const { ClientRepository } = require('../repositories/client.repository');
const { EmployeeRepository } = require('../repositories/employee.repository');
const { UserRepository } = require('../repositories/user.repository');

// Code
const deviceService = new DeviceRepository(new DeviceDao())
const clientService = new ClientRepository(new ClientDao())
const employeeService = new EmployeeRepository(new EmployeeDao())
const userService = new UserRepository(new UserDao())

// Exports
module.exports = {
  deviceService,
  clientService,
  employeeService,
  userService
}