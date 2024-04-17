// Imports
const { logger } = require(`../config/logger`);
const employeesController = require(`../controllers/employees.controller`);
const { RouterClass } = require(`./routerClass`);

// Code
class EmployeesRouter extends RouterClass {
  init() {
    this.get(`/`, [`ADMIN`], async (req, res) => {
      const employees = await employeesController.getEmployees()
    })

    this.post(`/`, [`PUBLIC`], async (req, res) => {

    })

    this.put(`/`, [`PUBLIC`], async (req, res) => {

    })

    this.delete(`/`, [`PUBLIC`], async (req, res) => {

    })
  }
}

// Export
module.exports = EmployeesRouter