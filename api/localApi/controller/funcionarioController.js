const ApiService = require("./../service/apiService");
class ApiController{
   async findAllFuncionario() {
    console.log('findAllFuncionarioicontroller');

        const apiService = new ApiService();
        const result= await apiService.findAllFuncionario();
        return result;
    }
  
    async findAOneFuncionario(id) {
        const apiService = new ApiService();
        const result= await apiService.findOneFuncionario(id);
        return result;
    }
 
    async updateFuncionario(body) {
        const apiService = new ApiService();
        const result= await apiService.updateFuncionario(body);
        return result;
    }

    async deleteFuncionario(id) {
        console.log("ID", id);
        const apiService = new ApiService();
        const result= await apiService.deleteFuncionario(id);
        return result;
    }
}
module.exports = ApiController

