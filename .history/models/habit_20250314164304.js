import { DataTypes } from 'sequelize';
import { sequelize } from './index';

const Habit = sequelize.define('Habit', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completedDays: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

await Habit.sync();

export default Habit;
