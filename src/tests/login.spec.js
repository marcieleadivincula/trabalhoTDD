const assert = require("assert");
const expect = require("expect");
// const should = require("should");
const should = chai.should;

//require object
const users = {
  1: { user: "maria@gmail.com", senha: "123" },
  2: { user: "joao@gmail.com", senha: "741" },
  3: { user: "luis@gmail.com", senha: "852" },
  4: { user: "fernanda@gmail.com", senha: "963" },
  5: { user: "fabio@gmail.com", senha: "159" },
  6: { user: "", senha: "" },
};

describe("Efetuar Login", () => {
  // Aqui vão os testes que descrevem o comportamento de `login()`
  describe("Preencher os campos Usuário e senha com valores válidos", () => {
    it("Deveria retornar true", function () {
      //assert.equal(actual, expected[, message])
      assert.equal(login(users[1].user, users[1].senha), true);
    });
  });

  describe("Preencher os campos Usuário e senha com valores inválidos", () => {
    it("Deveria retornar false", function () {
      //assert.equal(actual, expected[, message])
      assert.equal(login(users[6].user, users[6].senha), false);
    });
  });
});


