const assert = require("assert");
//require object
const users = {
  1: { user: "maria@gmail.com", senha: "123" },
  2: { user: "joao@gmail.com", senha: "741" },
  3: { user: "luis@gmail.com", senha: "852" },
  4: { user: "fernanda@gmail.com", senha: "963" },
  5: { user: "fabio@gmail.com", senha: "159" },
};

const userExpected = {
  1: { user: "fernanda@gmail.com", senha: "123" },
};

describe("Efetuar Login", () => {
  // Aqui vão os testes que descrevem o comportamento de `login()`
  describe("Preencher os campos Usuário e senha com valores válidos", () => {
    it("Deveria retornar false", function () {
      assert.equal(users[1], userExpected[1], "Comparando usuários");
    });
  });
});
