const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', // or mysql, sqlite, etc.
});


module.exports = { sequelize };
