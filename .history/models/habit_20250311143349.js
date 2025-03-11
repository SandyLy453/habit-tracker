const { DataTypes } = require("sequelize");
const sequelize = require("./index");  // 导入 sequelize 实例

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
