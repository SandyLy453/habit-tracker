import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('habit_tracker', 'postgres', '3641', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
