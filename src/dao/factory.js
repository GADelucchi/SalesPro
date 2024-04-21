const { persistence } = require("../../process/config");
const { connectDB } = require("../config/serverConfig");

let ClientDao
let DeviceDao
let EmployeeDao
let UserDao

switch (persistence) {
    case 'SQL':
        connectDB()
        const ClientDaoSql = require('./sql/client.sql')
        const DeviceDaoSql = require('./sql/device.sql')
        const EmployeeDaoSql = require('./sql/employee.sql')
        const UserDaoSql = require('./sql/user.sql')

        ClientDao = ClientDaoSql
        DeviceDao = DeviceDaoSql
        EmployeeDao = EmployeeDaoSql
        UserDao = UserDaoSql
        break;

    case 'FILE':
        const UserDaoFile= require('./file/user.file')
        const ProductDaoFile = require('./file/product.file')

        UserDao = UserDaoFile
        ProductDao = ProductDaoFile
        break;
        
        case 'MEMORY':
        const UserDaoMemory = require('./memory/product.memory')
        const ProductDaoMemory = require('./memory/user.memory')

        UserDao = UserDaoMemory
        ProductDao = ProductDaoMemory
        break;

    default:
        break;
}

module.exports = {
    ClientDao,
    DeviceDao,
    EmployeeDao,
    UserDao
}