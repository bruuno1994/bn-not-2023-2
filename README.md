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