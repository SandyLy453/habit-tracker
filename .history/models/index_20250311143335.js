const { Sequelize } = require('sequelize');
require('dotenv').config();  // 加载 .env 文件中的配置

// 初始化 Sequelize 实例
const sequelize = new Sequelize(
  process.env.DB_NAME,    // 数据库名
  process.env.DB_USER,    // 用户名
  process.env.DB_PASSWORD, // 密码
  {
    host: process.env.DB_HOST, // 主机地址
    dialect: 'postgres',       // 使用 PostgreSQL
    port: process.env.DB_PORT  // PostgreSQL 端口
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;  // 导出 sequelize 实例
