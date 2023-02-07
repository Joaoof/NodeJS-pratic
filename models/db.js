const Sequelize = require('sequelize')

// ? Conexão com o banco de dados MySql

const sequelize = new Sequelize('postApp', 'root', 'Admin123', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
}) 

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}