const assert = require("assert");
//require object
const users = {
  1: { user: "maria@gmail.com", senha: "123" },
  2: { user: "joao@gmail.com", senha: "741" },
  3: { user: "luis@gmail.com", senha: "852" },
  4: { user: "fernanda@gmail.com", senha: "963" },
  5: { user: "fabio@gmail.com", senha: "159" },
};

describe("Efetuar Login", () => {
  // Aqui vão os testes que descrevem o comportamento de `login()`
  describe("Preencher os campos Usuário e senha com valores válidos", () => {
    it("Deveria retornar true", function () {
      assert.equal(login(users[1].user, users[1].senha), true);
    });
  });

  describe("Preencher os campos Usuário e senha com valores inválidos", () => {
    it("Deveria retornar false", function () {
      assert.equal(login(users[2].user, users[2].senha), false);
    });
  });
});
