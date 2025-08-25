require('dotenv').config();
const { sequelize } = require('./src/config/configDB');
const express = require('express');
const app = express();

//rotas

const livroRoute = require('./src/modules/livro/routes/livro.routes');

app.use(express.json())

app.use('/', livroRoute);

const porta = process.env.PORT;
/* app.listen(porta, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
    console.log(`Servidor rodando na porta ${porta}`);
}); */
module.exports = app;