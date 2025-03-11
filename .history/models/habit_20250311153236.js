// models/habit.js
import { DataTypes } from 'sequelize';
import sequelize from './index.js'; // Import sequelize instance

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

// Sync the model with the database if needed
// This is optional, but it's useful to ensure the model is created in the database
await Habit.sync();

export default Habit; // Export Habit as default
