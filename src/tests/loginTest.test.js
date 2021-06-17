const assert = require('assert');
const chai = require('chai'), expect = chai.expect, should = chai.should(), assert = require('chai').assert;

const user  = "maria@gmail.com", senha = "1234567814", cliquei = true;
//require object
const users = {
  1: { user: "maria@gmail.com", senha: "1234567814" },
  2: { user: "joao@gmail.com", senha: "7411234518" },
  3: { user: "luis@gmail.com", senha: "8524567893" },
  4: { user: "fernanda@gmail.com", senha: "9637418526" },
  5: { user: "fabio@gmail.com", senha: "1598529637" },
  6: { user: "", senha: "" },
  7: { user: "maria@gmail.com", senha: "1234567814789" }, //mais de 10 caracteres
  8: { user: "", senha: "12345678910" },
  9: { user: "maria@gmail.com", senha: "1234567" }, //menos de 8 caracteres
  10: { user: "maria@gmail.com", senha: "" },
};

//EXEMPLO:
// const assert = require('chai').assert
//   , foo = 'bar'
//   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
// assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
// assert.equal(foo, 'bar', 'foo equal `bar`');
// assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
// assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');

describe("Efetuar Login", () => {
  // Aqui vão os testes que descrevem o comportamento de `login()`
  describe("Preencher os campos Usuário e senha com valores válidos", () => {
    it("Deveria retornar true", function () {
      //assert.equal(actual, expected[, message])
      // assert.equal(login(users[1].user  == "maria@gmail.com" && users[1].senha == "1234567814"), true);
      assert.typeOf(users[1].user, 'string', 'user is a string'); // with optional message
    assert.typeOf(users[1].senha, 'string', 'senha is a string'); 
    });
      });

  describe("Preencher os campos Usuário e senha com valores válidos", () => {
     it("Deveria retornar true", function () {
      //assert.equal(actual, expected[, message])
      assert.equal(users[1].user, 'maria@gmail.com', 'user equal `maria@gmail.com`');
      assert.equal(users[1].senha, '1234567814', 'senha equal `1234567814`');
    });  
  });

    describe("Preencher os campos Usuário e senha com valores válidos", () => {

    it("Deveria retornar true", function () {
      //assert.equal(actual, expected[, message])
      assert.lengthOf(users[1].senha, 10, 'senha`s value has a length of 10');
      assert.lengthOf(users[1].senha, 8, 'senha`s value has a length of 8');
    });
  });
});

describe("Efetuar Login", () => {
  // Aqui vão os testes que descrevem o comportamento de `login()`
  describe("Preencher os campos usuário e senha com valores inválidos", () => {
    it("Deveria retornar false", function () {
      //assert.equal(actual, expected[, message])
      assert.equal(login(users[2].user  == "juca@gmail.com" && users[2].senha == "1234567815"), false);
      assert.equal(users[1].user, 'fernanda@gmail.com', 'user equal `maria@gmail.com`');
      assert.equal(users[1].senha, '1234567891', 'senha equal `1234567814`');
    });
  });
});

describe("Efetuar Login", () => {
  // Aqui vão os testes que descrevem o comportamento de `login()`
  describe("Preencher o campo usuário com valor válido e o campo senha com valor inválido", () => {
    it("Deveria retornar false", function () {
      //assert.equal(actual, expected[, message])
      assert.equal(login(users[3].user  == "luis@gmail.com" && users[3].senha == "78945612385"), false);
    });
  });
});

describe("Efetuar Login", () => {
  // Aqui vão os testes que descrevem o comportamento de `login()`
  describe("Preencher o campo senha com valor válido e o campo usuário com valor inválido", () => {
    it("Deveria retornar false", function () {
      //assert.equal(actual, expected[, message])
      assert.equal(login(users[4].user == "fe@gmail.com" && users[4].senha == "9637418526"), false);
    });
  });
});

describe("Efetuar Login", () => {
    // Aqui vão os testes que descrevem o comportamento de `login()`
describe("Tentar preencher o campo senha com mais de 10 caracteres", () => {
    it("Deveria retornar false", function () {
      //assert.equal(actual, expected[, message])
      assert.lengthOf(users[1].senha, 10, 'senha`s value has a length of 10');
      assert.lengthOf(users[1].senha, 11, 'senha`s value has a length of 11');
    });
  });
});

describe("Efetuar Login", () => {
  // Aqui vão os testes que descrevem o comportamento de `login()`
  describe("Tentar preencher o campo senha com menos de 8 caracteres", () => {
    it("Deveria retornar false", function () {
      //assert.equal(actual, expected[, message])
      assert.lengthOf(users[1].senha, 8, 'senha`s value has a length of 8');
      assert.lengthOf(users[1].senha, 7, 'senha`s value has a length of 7');
    });
  });
});
describe("Efetuar Login", () => {
  // Aqui vão os testes que descrevem o comportamento de `login()`
  describe("Não preencher os campos usuário e senha e clicar em logar", () => {
    it("Deveria retornar false", function () {
      //assert.equal(actual, expected[, message])
      assert.equal(login(users[6].user != "" && users[6].senha != ""), false);
    });
  });
});

describe("Efetuar Login", () => {
  // Aqui vão os testes que descrevem o comportamento de `login()`
  describe("Preencher todos os campos e clicar no botão limpar", () => {
    it("Deveria retornar false", function () {
      //assert.equal(actual, expected[, message])
      assert.equal(login(users[5].user == "fabio@gmail.com" && users[5].senha == "1598529637"), false);
      assert.equal(users[1].user, 'maria@gmail.com', 'usuário equal `maria@gmail.com`');
      assert.equal(users[1].senha, '1234567814', 'senha equal `1234567814`');

      assert.lengthOf(users[1].senha, 10, 'senha`s value has a length of 10');
      assert.lengthOf(users[1].senha, 8, 'senha`s value has a length of 8');
    });
  });
});