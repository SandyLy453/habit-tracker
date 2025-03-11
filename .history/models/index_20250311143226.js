const { Sequelize } = require('sequelize');

// 使用直接配置连接
const sequelize = new Sequelize('habit_tracker', 'your-username', 'your-password', {
  host: '127.0.0.1',   // 数据库主机
  dialect: 'postgres', // 数据库类型
  port: 5432           // PostgreSQL 默认端口
});

module.exports = sequelize;
