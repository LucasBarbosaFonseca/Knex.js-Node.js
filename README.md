Estudos de knex.js que é um SQL Query Builder Javascript que da pra usar muitos
bancos de dados nele, mas no estudo estou usando Postgres.

Estou usando o Postgres através do Docker de um container da imagem Postgres

BAIXAR IMAGEM DO POSTGRES ANTES DE CRIAR O CONTAINER:
### docker pull postgres

PARA CRIAR CONTAINER COM A IMAGEM DO POSTGRES: 
### docker run --name postgres_banco -e POSTGRES_PASSWORD=webdeveloper -d -p 5432:5432 postgres

INICIAR CONTAINER POSTGRES ANTES DE EXECUTAR:
### docker start postgres_banco

EXECUTAR CONTAINER DO POSTGRES PARA MANIPULA-LO PELO TERMINAL: 
### docker exec -it postgres_banco psql -U postgres --password


INSTALAR DEPENDÊNCIAS DO PROJETO:
### npm i knex pg express


CRIAR ./knexfile.js
### npx knex init

CRIAR MIGRATIONS 
### npx knex migrate:make nome_migrate

EXECUTAR MIGRATIONS CRIADAS:
### npx knex migrate:latest

CRIAR SEED:
### npx knex seed:make nome_seed

EXECUTA SEED:
### npx knex seed:run

EXECUTAR SEED ESPECÍFICO
### npx knex seed:run --specific 002_projects.js


LINK DO DOCUMENTO ESCRITO DO QUE FOI ESTUDADO:
### https://www.notion.so/Masterclass-Knex-45d9705a634a4c2b80ac1599585163a6

VIDEO DA AULA QUE SEGUI:
SQL no Node.js com Knex.js | Masterclass #13
### https://www.youtube.com/watch?v=U7GjS3FuSkA