# desafio-tindin
Projeto de cadastro de aulas para o desafio técnico da Tindin

vitor rossini gonzalez
rossinivitor@hotmail.com

projeto criado utilizando node.js (express.js) e typescript

o projeto foi desenvolvido utilizando arquitetura hexagonal e um modelo do tipo:

controller -> service -> repository

baseado em usecases, com desacoplameto
entre as camadas conforme proposto por Alistair Cockburn.

além disso, foram aplicados diversos princípios SOLID, como:
segregação de interfaces;
responsabilidade única;
inversão de dependencia;
etc

ferramentas utilizadas:

tsyringe para injeção de dependencias;
jsonwebtoken para autenticação;
mongoose para integração com o banco de dados MongoDb
