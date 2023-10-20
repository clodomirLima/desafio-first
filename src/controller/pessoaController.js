const PessoaService = require("../service/pessoaService");
class PessoaController {
    async findAllPessoas() {
        const pessoaService = new PessoaService();

        const result = await pessoaService.findAllPessoas();
        return result;
    }

    async findByIdPessoa(id) {
        const pessoaService = new PessoaService();

        const result = await pessoaService.findByIdPessoa(id);
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

    // async findAOneFuncionario(id) {
    //     const funcionarioService = new FuncionarioService();

    //     const result = await funcionarioService.findOneFuncionario(id);
    //     return result;
    // }

    // async updateFuncionario(body) {
    //     const funcionarioService = new FuncionarioService();

    //     const result = await funcionarioService.updateFuncionario(body);
    //     return result;
    // }

    // async deleteFuncionario(id) {
    //     const funcionarioService = new FuncionarioService();

    //     const result = await funcionarioService.deleteFuncionario(id);
    //     return result;
    // }
}
module.exports = PessoaController

