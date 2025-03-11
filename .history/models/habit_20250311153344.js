// models/habit.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // Import sequelize as the default export

// Define the Habit model
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

// Sync the model with the database
await Habit.sync(); // This syncs the model with the database

export default Habit; // Export Habit as the default export
