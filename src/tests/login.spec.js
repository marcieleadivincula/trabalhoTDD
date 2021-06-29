const assert = require("assert");
const expect = require("expect");
//const expect = chai.expect;
const should = require("should");
//const should = chai.should;
const chai = require("chai");

// test('Não aceita lance com valor menor do que zero', () => {
//      expect(true).toBe(true);
// })

describe("validateLogin", () => {
    it("Deve retornar True para usuário e senha válidos", () => {
      assertEquals(validateLogin("maria@gmail.com", "12378936"), true, "Saída errada para 'maria@gmail.com' and '12378936'");
      assertEquals(validateLogin("joao@gmail.com", "74145641"), true, "Saída errada para 'joao@gmail.com' and '74145641'");
      assertEquals(validateLogin("luis@gmail.com", "85274112"), true, "Saída errada para 'luis@gmail.com' and '85274112'");
      assertEquals(validateLogin("fernanda@gmail.com", "96385256"), true, "Saída errada para 'fernanda@gmail.com' and '96385256'");
      assertEquals(validateLogin("juca@gmail.com", "18569639"), true, "Saída errada para 'juca@gmail.com' and '18569639'");
      assertEquals(validateLogin("fabio@gmail.com", "15975378"), true, "Saída errada para 'fabio@gmail.com' and '15975378'");
    });

  it("Deveria retornar False para usuário válido e senha inválida", () => {
    assertEquals(validateLogin("maria@gmail.com", "18569639"), false, "Saída errada para 'maria@gmail.com' and '12378936'");
    assertEquals(validateLogin("joao@gmail.com", "74145641"), false, "Saída errada para 'joao@gmail.com' and '74145641'");
    assertEquals(validateLogin("luis@gmail.com", "85274112"), false, "Saída errada para 'luis@gmail.com' and '85274112'");
    assertEquals(validateLogin("fernanda@gmail.com", "74145641"), false, "Saída errada para 'fernanda@gmail.com' and '96385256'");
    assertEquals(validateLogin("juca@gmail.com", "852741"), false, "Saída errada para 'juca@gmail.com' and '852741'");
    assertEquals(validateLogin("fabio@gmail.com", "8936"), false, "Saída errada para 'fabio@gmail.com' and '8936'");
    assertEquals(validateLogin("fabio@gmail.com", ""), false, "Saída errada para '' and ''");
    assertEquals(validateLogin("", "8936"), false, "Saída errada para '' and ''");
  });

  it("Deve retornar False para usuário inválido e senha válida", () => {
    assertEquals(validateLogin("maria@gmail.com", "18569639"), false, "Saída errada para 'maria@gmail.com' and '12378936'");
    assertEquals(validateLogin("joao@gmail.com", "74145641"), false, "Saída errada para 'joao@gmail.com' and '74145641'");
    assertEquals(validateLogin("luis@gmail.com", "85274112"), false, "Saída errada para 'luis@gmail.com' and '85274112'");
    assertEquals(validateLogin("fernanda@gmail.com", "74145641"), false, "Saída errada para 'fernanda@gmail.com' and '96385256'");
    assertEquals(validateLogin("juca@gmail.com", "852741"), false, "Saída errada para 'juca@gmail.com' and '852741'");
    assertEquals(validateLogin("fabio@gmail.com", "8936"), false, "Saída errada para 'fabio@gmail.com' and '8936'");
    assertEquals(validateLogin("fabio@gmail.com", ""), false, "Saída errada para '' and ''");
    assertEquals(validateLogin("", "8936"), false, "Saída errada para '' and ''");
  });

  it("Deve retornar False para email e senha inválidos", () => {
    assertEquals(validateLogin("maria@gmail.com", "18569639"), false, "Saída errada para 'maria@gmail.com' and '12378936'");
    assertEquals(validateLogin("joao@gmail.com", "74145641"), false, "Saída errada para 'joao@gmail.com' and '74145641'");
    assertEquals(validateLogin("luis@gmail.com", "85274112"), false, "Saída errada para 'luis@gmail.com' and '85274112'");
    assertEquals(validateLogin("fernanda@gmail.com", "74145641"), false, "Saída errada para 'fernanda@gmail.com' and '96385256'");
    assertEquals(validateLogin("juca@gmail.com", "852741"), false, "Saída errada para 'juca@gmail.com' and '852741'");
    assertEquals(validateLogin("fabio@gmail.com", "8936"), false, "Saída errada para 'fabio@gmail.com' and '8936'");
    assertEquals(validateLogin("fabio@gmail.com", ""), false, "Saída errada para '' and ''");
    assertEquals(validateLogin("", "8936"), false, "Saída errada para '' and ''");
  });

  
  it("Deve retornar True para senhas com comprimento >= 8 e <= 10", () => {
    assertEquals(validateLogin("maria@gmail.com","12345678"), true, "Saída errada para '12345678'");
    assertEquals(validateLogin("maria@gmail.com","00000000"), true, "Saída errada para '00000000'");
    assertEquals(validateLogin("maria@gmail.com","11111111"), true, "Saída errada para '11111111'");
    assertEquals(validateLogin("maria@gmail.com","000000000"), true, "Saída errada para '000000000'");
    assertEquals(validateLogin("maria@gmail.com","111111111"), true, "Saída errada para '111111111'");
    assertEquals(validateLogin("maria@gmail.com","123456789"), true, "Saída errada para '123456789'");
    assertEquals(validateLogin("maria@gmail.com","098765432"), true, "Saída errada para '098765432'");
    assertEquals(validateLogin("maria@gmail.com","0000000000"), true, "Saída errada para '0000000000'");
    assertEquals(validateLogin("maria@gmail.com","1234567890"), true, "Saída errada para '1234567890'");
    assertEquals(validateLogin("maria@gmail.com","0909090909"), true, "Saída errada para '0909090909'");
    assertEquals(validateLogin("maria@gmail.com","1111111111"),true, "Saída errada para '1111111111'");
    assertEquals(validateLogin("maria@gmail.com","0987654321"),true, "Saída errada para '0987654321'");
  });

  it("Deve retornar False para senhas com comprimento menor que 8 e maior que 10", () => {
    assertEquals(validateLogin("maria@gmail.com","1"), false, "Saída errada para '1'");
    assertEquals(validateLogin("maria@gmail.com","12"), false, "Saída errada para '12'");
    assertEquals(validateLogin("maria@gmail.com","123"), false, "Saída errada para '123'");
    assertEquals(validateLogin("maria@gmail.com","12345"), false, "Saída errada para '12345'");
    assertEquals(validateLogin("maria@gmail.com","1234567"), false, "Saída errada para '1234567'");
    assertEquals(validateLogin("maria@gmail.com","-1234"), false, "Saída errada para '-1234'");
    assertEquals(validateLogin("maria@gmail.com","1.234"), false, "Saída errada para '1.234'");
    assertEquals(validateLogin("maria@gmail.com","-1.234"), false, "Saída errada para '-1.234'");
    assertEquals(validateLogin("maria@gmail.com","12345678901"), false, "Saída errada para '12345678901'");
    assertEquals(validateLogin("maria@gmail.com","1234567890145"), false, "Saída errada para '1234567890145'");
    assertEquals(validateLogin("maria@gmail.com","0"), false, "Saída errada para '0'");
    assertEquals(validateLogin("maria@gmail.com",""), false, "Saída errada para ''");
  });

  it("Deve retornar False quando não preencher os campos usuário e senha e clicar em Logar", () => {
    assertEquals(validateLogin("",""), false, "Saída errada para '' e ''");
  });

});


