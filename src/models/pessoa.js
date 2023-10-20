const { Sequelize, Model } = require('sequelize');

class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true,
          field: 'ID',
        },
        nome: {
          type: Sequelize.BIGINT,
          field: 'Nome',
          allowNull: false,
        },
        sobreNome: {
          type: Sequelize.STRING(255),
          field: 'Sobrenome',
          allowNull: false,
        },
        dataNascimento: {
          type: Sequelize.DATE,
          field: 'DataNascimento',
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(255),
          field: 'Email',
          allowNull: false,
        },
        telefone: {
          type: Sequelize.STRING(255),
          field: 'Telefone',
          allowNull: false,
        },
        endereco: {
          type: Sequelize.STRING(255),
          field: 'Endereco',
          allowNull: false,
        },
        cidade: {
          type: Sequelize.STRING(100),
          field: 'Cidade',
          allowNull: false,
        },
        estado: {
          type: Sequelize.STRING(50),
          field: 'Estado',
          allowNull: false,
        },
        cep: {
          type: Sequelize.STRING(10),
          field: 'Estado',
          allowNull: false,
        },
        cpfCnpj: {
          type: Sequelize.STRING(14),
          field: 'CPF_CNPJ',
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Pessoa',
        freezeTableName: true,
        timestamps: false,
      },
    );

    return this;
  }
}

module.exports = Pessoa;