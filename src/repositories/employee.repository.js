// Code
class EmployeeRepository {
  constructor(dao) {
      this.dao = dao
  }

  get = async () => await this.dao.get()

  getById = async (eid) => await this.dao.getById(eid)

  create = async (newEmployee) => await this.dao.create(newEmployee)

  update = async (eid, employeeToReplace) => await this.dao.update(eid, employeeToReplace)

  delete = async (eid) => await this.dao.delete(eid)
}

module.exports = {
  EmployeeRepository
}