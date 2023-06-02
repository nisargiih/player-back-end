const { Sequelize } = require("sequelize");

// database connection configuration
const sequlize = new Sequelize('player', 'root', 'User@123', {
    host: 'localhost',
    dialect: 'mysql'
})

// creating database connection
try {
    sequlize.authenticate()
    console.log("Database connected sucessfully!!!!");
} catch (error) {
    console.log("ERROR",error);
}

module.exports = {sequlize}; 