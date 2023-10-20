const chai = require("chai");
const PessoaController = require("../../../src/controller/pessoaController");
const PessoaService = require("../../../src/service/pessoaService");

describe("PessoaController", () => {
  let pessoaController;

  const mockResult=  {
    id: 2,
    nome: "Mariano",
    sobreNome: "Reis",
    dataNascimento: "1999-10-20",
    email: "joaoMarcos@gmail.com",
    telefone: "61995928783",
    endereco: "Quadra 90 conunto A",
    cidade: "Aguas Lindas",
    estado: "GO",
    cep: "GO",
    cpfCnpj: "73864436095",
  };
  
  beforeAll(() => {
    pessoaController = new PessoaController();
    jest.spyOn(pessoaController, "findAllPessoas").mockImplementation(() => [
      {
        id: 2,
        nome: "Mariano",
        sobreNome: "Reis",
        dataNascimento: "1999-10-20",
        email: "joaoMarcos@gmail.com",
        telefone: "61995928783",
        endereco: "Quadra 90 conunto A",
        cidade: "Aguas Lindas",
        estado: "GO",
        cep: "GO",
        cpfCnpj: "73864436095",
      },
    ]);

    jest.spyOn(pessoaController, "findByIdPessoa").mockImplementation(() => mockResult);
  });

  describe("findAllPessoas", () => {
    it("should call findAllPessoas from PessoaService and return the result", async () => {
      const result = await pessoaController.findAllPessoas();
      expect(result).toEqual([
        {
          id: 2,
          nome: "Mariano",
          sobreNome: "Reis",
          dataNascimento: "1999-10-20",
          email: "joaoMarcos@gmail.com",
          telefone: "61995928783",
          endereco: "Quadra 90 conunto A",
          cidade: "Aguas Lindas",
          estado: "GO",
          cep: "GO",
          cpfCnpj: "73864436095",
        },
      ]);
    });
  });

  describe("findByIdPessoa", () => {
    it("should call findByIdPessoa from PessoaService with the provided ID and return the result", async () => {
      const id = 2;
      const expectedResult = {
        id: 2,
        nome: "Mariano",
        sobreNome: "Reis",
        dataNascimento: "1999-10-20",
        email: "joaoMarcos@gmail.com",
        telefone: "61995928783",
        endereco: "Quadra 90 conunto A",
        cidade: "Aguas Lindas",
        estado: "GO",
        cep: "GO",
        cpfCnpj: "73864436095",
      };

      const result = await pessoaController.findByIdPessoa(id);
      expect(result).toEqual(expectedResult);
    });
  });
});
