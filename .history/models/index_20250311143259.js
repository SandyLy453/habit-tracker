const { Sequelize } = require('sequelize');
require('dotenv').config();  // 加载 .env 文件中的配置

// 配置 Sequelize 实例
const sequelize = new Sequelize(
  process.env.DB_NAME,    // 数据库名
  process.env.DB_USER,    // 用户名
  process.env.DB_PASSWORD, // 密码
  {
    host: process.env.DB_HOST, // 主机地址
    dialect: 'postgres',       // 数据库类型
    port: process.env.DB_PORT  // 数据库端口
  }
);

module.exports = sequelize;
