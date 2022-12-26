const { Sequelize, Model } = require('sequelize');

class Funcionario extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true,
          field: 'ID',
        },
        idade: {
          type: Sequelize.BIGINT,
          field: 'IDADE',
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING(255),
          field: 'NOME',
          allowNull: false,
        },
        cargo: {
          type: Sequelize.STRING(10),
          field: 'CARGO',
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'funcionario_tb',
        freezeTableName: true,
        timestamps: false,
      },
    );

    return this;
  }
}

module.exports = Funcionario;