const FuncionarioService = require("./../service/funcionarioService");
class FuncionarioController {
    async findAllFuncionario() {
        const funcionarioService = new FuncionarioService();

        const result = await funcionarioService.findAllFuncionario();
        return result;
    }

    async findAOneFuncionario(id) {
        const funcionarioService = new FuncionarioService();

        const result = await funcionarioService.findOneFuncionario(id);
        return result;
    }

    async updateFuncionario(body) {
        const funcionarioService = new FuncionarioService();

        const result = await funcionarioService.updateFuncionario(body);
        return result;
    }

    async deleteFuncionario(id) {
        const funcionarioService = new FuncionarioService();

        const result = await funcionarioService.deleteFuncionario(id);
        return result;
    }
}
module.exports = FuncionarioController

