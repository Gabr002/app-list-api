const { describe, expect, it } = require("@jest/globals")
const servicePessoa = require("../src/services/service")

describe("Primeiro teste de pessoa", () => {
    const service = new servicePessoa();

    it("Add um nome na lista", () => {
        const nome = "Ana";
        service.Adicionar(nome);

        const nomes = service.PegarTodos();

        console.log(nomes);

        expect(nomes[nomes.length - 1]).toBe(nome);
    });
    
    it("Atualizar um nome na lista", () => {
        const nome = "Lucas";
        const index = 2;
        service.Alterar(index, nome);

        const nomes = service.PegarTodos();

        console.log(nomes);

        expect(nomes[index]).toBe(nome);
    })

    it("Deletar um nome na lista", () => {
      const index = 0;
      const nomeAntes = service.PegarUm(index);
      service.Deletar(index);
      const nomeDepois = service.PegarUm(index);

      expect(nomeAntes).not.toBe(nomeDepois);
  })
})