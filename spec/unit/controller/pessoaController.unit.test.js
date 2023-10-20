const ApiService = require("../api/localApi/service/apiService");

describe("Teste da funcionario service", () => {
  const apiService = new ApiService();
  jest.setTimeout(100000)

  it("Teste do método findAllFuncionario", async () => {

    const result = await apiService.findAllFuncionario();
    expect(result).toBeDefined();
  });

  it("Teste do método findOneFuncionario", async () => {

    const result = await apiService.findOneFuncionario(1);
    expect(result).toBeDefined();
  });

  it("Teste do método deleteFuncionario", async () => {

    const result = await apiService.deleteFuncionario(1);
    expect(result).toBeDefined();
  });

  it("Teste do método updateFuncionario", async () => {
    const body = {
      "id": 2,
      "idade": 33,
      "nome": "Juniot Gomes da Silva",
    };
    const result = await apiService.updateFuncionario(body);
    expect(result).toBeDefined();
  });
});

