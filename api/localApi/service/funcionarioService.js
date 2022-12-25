const Funcionario = require('../models/funcionarioTb')
const Database = require('../database/conectDB')

class FuncionarioService {
    async findAllFuncionario() {
        const db = new Database();
        db.init()
        try {
            const result = await Funcionario.findAll();
            return result;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            db.close();
        }
    }

    async findOneFuncionario(id) {
        const db = new Database();
        try {
            const result = await Funcionario.findByPk(id);
            if (result) {
                return result;
            }
            return {
                message: "Funcionario nao encontrado"
            }
        } catch (error) {
            throw new Error(error.message);
        } finally {
            db.close();
        }
    }

    async updateFuncionario(body) {
        const db = new Database();
        try {
            const result = await Funcionario.update(
                {
                    idade: body.idade,
                    nome: body.nome,
                    cargo: body.cargo,
                },
                {
                    where: {
                        id: body.id,
                    },
                },
            );
            if (result) return {
                message: "Pessoa altera com sucesso!"
            };
        } catch (error) {
            throw new Error(error.message);
        } finally {
            db.close();
        }
    }

    async deleteFuncionario(id) {
        const db = new Database();
        try {
            const result = await Funcionario.destroy(
                {
                    where: {
                        id: id
                    },
                },
            );
            if (result) return {
                message: "Pessoa excluida com sucesso!"
            };
        } catch (error) {
            throw new Error(error.message);
        } finally {
            db.close();
        }
    }

}

module.exports = FuncionarioService