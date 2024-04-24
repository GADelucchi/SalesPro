// Import
const { employeeService } = require('../service/index.service')

// Code
class EmployeeController {
    getEmployees = async () => await employeeService.get()

    getEmployeesPaginated = async (limit, page, category, sort) => await employeeService.getPaginated(limit, page, category, sort)

    getEmployeeById = async (eid) => await employeeService.getById(eid)

    createEmployee = async (newEmployee) => await employeeService.create(newEmployee)

    updateEmployee = async (eid, employeeController) => await employeeService.update(eid, employeeController)

    deleteEmployee = async (eid) => await employeeService.delete(eid)
}

// Export
module.exports = new EmployeeController()