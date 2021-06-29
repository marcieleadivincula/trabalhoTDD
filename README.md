# Trabalho de TDD
Projeto desenvolvido na disciplina de Qualidade e Testes de Software da faculdade Senac.

# Testes no NodeJS aplicando TDD com Jest

## Tecnologias utilizadas:
  - Mocha (npm install --save-dev mocha) : Test framework.
  - Chai (npm install --save-dev chai) : É uma lib que nos ajuda a escrever os testes.
  - Nodemon (npm install --save-dev nodemon)
  - ExpressJS (npm install --save express)
  - NodeJS
  - Jest (npm install --save-dev jest) ou yarn add --dev jest 
  - yarn add sequelize  
  - yarn add mysql2
  - yarn add sequelize-cli -D


## Outras opções:
  - Nyc (npm install --save-dev nyc; remover, pois não precisa caso instale o Jest) : Verifica a cobertura dos testes.
  - Should (npm install --save-dev should): Biblioteca para extender os testes.
  - npm install --save body-parser



# Conceitos:
 - Assert: asserções são afirmações.
 - 


# Notes:

"start": "node src/server.js",
"dev": "nodemon src/server.js --ignore __tests__",
"pretest": "NODE_ENV=test sequelize db:migrate",
"test": "NODE_ENV=test jest",
"posttest": "NODE_ENV=test sequelize db:migrate:undo:all"