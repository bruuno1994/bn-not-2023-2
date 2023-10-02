# bn-not-2023-2
Repositório da disciplina Banco de Dados - Não Relacional, 3º semestre DSM Fatec Franca, 2023/2

PROJETO BACK-END
================

# Para iniciar o projeto:
    `npx @aka-demy/create-express-app`

# Mudando para a pasta do projeto
    `cd back-end`

# Atualizando pacotes vulneráveis com atualizações de segurança
    ` npm audit fix --force`

# Instalando o Prisma como dependência de desenvolvimento
    `npm install prisma --save-dev`

# Inicializando o Prisma com conector para MongoDB
    `npx prisma init --datasource-provider mongodb`

# Adicionando o Prisma Client ao projeto
    `npm install @prisma/client`

# Gerando o cliente do Prisma
    `npx prisma generate`
    * Precisa ser executado **toda vez** que o arquivo `schema.prisma` for alterado!

# Exibindo os dados cadastrados com o Prisma Studio
    `npx prisma studio`
    * Deve ser executado em um segundo terminal, enquanto o projeto está sendo executado no primeiro

# Criando um novo CRUD a partir de outro já existente

### _Controller_
    1. Copie o arquivo de _controller_ (`Ctrl+c e Ctrl+v`) e renomeie-o de acordo com a nova entidade, para a qual será feito o novo CRUD.

    2. Substitua (`Ctrl+H`) todas as ocorrências de `prisma.xxxx` por `prisma.yyyy`, onde `xxxx` é o nome da entidade antigo e `yyyy` é o nome da entidade nova.

    3. Verifique, no método `retrieveAll()` do _controller_, se há campos sendo usados no _orderBy_, e substitua-os conforme a nova entidade.

### _Route_
    1. Copie o arquivo de _route_ (`Ctrl+c e Ctrl+v`) e renomeie-o de acordo com a nova entidade para a qual está sendo feito o CRUD.

    2. Na linha de `import` do _controller_, substitua o nome da entidade antiga, pelo nome da entidade nova.

### Arquivo `app.js`

    1. Na poarte inferior, do arquivo, na seção de rotas, copie e cole as duas linhas correspondentes a uma rota já existente, e faça as substituições necessárias.

    2. São **quatro substituições** ao todo, duas em cada linha.