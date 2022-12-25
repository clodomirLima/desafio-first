const Sequelize = require('sequelize');
require('dotenv').config()

const get = () => {
  const dbName = process.env.DB_NAME;
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;
  const dbHost = process.env.DB_HOST;
  const dbPort = 3306;
  const dbDialect = 'mysql';

  return {
    dialect: dbDialect,
    host: dbHost,
    username: dbUser,
    password: dbPassword,
    database: dbName,
    port: dbPort,
    logging: false,
    define: {
      underscored: true,
      underscoredAll: true,
      freezeTableName: false,
      timestamps: false,
    },
  };
};

module.exports = {
  get,
  Op: Sequelize.Op,
  Sequelize,
};
