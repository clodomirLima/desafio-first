const Funcionario = require('../models/funcionarioTb')
const Database = require('../database/conectDB')

class ApiService {
    async findAllFuncionario() {
        const db = new Database();
        db.init()
        try {
            const result = await Funcionario.findAll();
            console.log('result' ,result);
            return result;
        } catch (error) {
            console.log('error findAllFuncionario', error);
            throw new Error(error);
        } finally {
            // db.close();
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
            console.log(error);
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
            console.log(error);
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
            console.log(error);
        } finally {
            db.close();
        }
    }

}

module.exports = ApiService