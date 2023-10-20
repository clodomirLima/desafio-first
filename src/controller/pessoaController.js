const PessoaService = require("../service/pessoaService");

class PessoaController {
  async findAllPessoas() {
    const pessoaService = new PessoaService();

    const result = await pessoaService.findAllPessoas({
      raw: true,
    });
    return result;
  }

  async findByIdPessoa(id, res) {
    const pessoaService = new PessoaService();

    const result = await pessoaService.findByIdPessoa(id, res);
    return result;
  }

  async createPessoa(body, res) {
    const pessoaService = new PessoaService();

    const result = await pessoaService.createPessoa(body, res);
    return result;
  }

  async updatePessoa(id, body) {
    const pessoaService = new PessoaService();

    const result = await pessoaService.updatePessoa(id, body);
    return result;
  }

  async deletarPessoa(id) {
    const pessoaService = new PessoaService();

    const result = await pessoaService.deletarPessoa(id);
    return result;
  }
}
module.exports = PessoaController;
