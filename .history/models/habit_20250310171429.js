const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Habit = sequelize.define("Habit", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completedDays: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Habit;
