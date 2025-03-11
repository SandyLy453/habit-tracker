import { Sequelize } from 'sequelize';
require("dotenv").config();

const sequelize = new Sequelize('habit_tracker', 'postgres', '3641', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = { sequelize };
