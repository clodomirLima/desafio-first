const Pessoa = require("../models/pessoa");
const Database = require("../database/conectDB");
const { validateEmail } = require("../utils/validateEmail");
const { validateCpfCnpjCnpj } = require("../utils/validateCpfCnpj");

class PessoaService {
  async findAllPessoas() {
    const db = new Database();
    db.init();
    try {
      const result = await Pessoa.findAll();
      return result;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }

  async findByIdPessoa(id, res) {
    const db = new Database();
    db.init();
    try {
      const result = await Pessoa.findOne({
        where: {
          id,
        },
      });

      if (!result) {
        return res.status(400).send({ message: "Pessoa Não encontrada" });
      }

      return result;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }

  async createPessoa(body, res) {
    const db = new Database();
    db.init();
    try {
      const {
        nome,
        sobreNome,
        dataNascimento,
        email,
        telefone,
        endereco,
        cidade,
        estado,
        cep,
        cpfCnpj,
      } = body;
      const validadeEmail = await validateEmail(email);
      if (!validadeEmail)
        return res.status(500).send({ message: "Email Invalido" });

      const validadeCpfCnpj = await validateCpfCnpjCnpj(cpfCnpj);
      if (!validadeCpfCnpj)
        return res.status(500).send({ message: "Cpf ou Cnpj inválido" });

      const created = await Pessoa.findOrCreate({
        where: { email },
        defaults: {
          nome,
          sobreNome,
          dataNascimento,
          email,
          telefone,
          endereco,
          cidade,
          estado,
          cep,
          cpfCnpj,
        },
      });

      if (created[1]) {
        return {
          message: "Pessoa Criada com sucesso!",
        };
      }
      return res
        .status(500)
        .send({ message: "Essa pessoa ja esta cadastrada!" });
    } finally {
      db.close();
    }
  }

  async updatePessoa(id, body) {
    const db = new Database();
    db.init();
    try {
      const {
        nome,
        sobreNome,
        dataNascimento,
        email,
        telefone,
        endereco,
        cidade,
        estado,
        cep,
        cpfCnpj,
      } = body;

      const result = await Pessoa.update(
        {
          nome,
          sobreNome,
          dataNascimento,
          email,
          telefone,
          endereco,
          cidade,
          estado,
          cep,
          cpfCnpj,
        },
        {
          where: {
            id,
          },
        }
      );

      if (result) {
        return {
          message: "Pessoa atualizada com sucesso!",
        };
      }
      return result;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }

  async deletarPessoa(id) {
    const db = new Database();
    try {
      const result = await Pessoa.destroy({
        where: {
          id,
        },
      });
      if (result)
        return {
          message: "Pessoa excluida com sucesso!",
        };
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }
}

module.exports = PessoaService;
