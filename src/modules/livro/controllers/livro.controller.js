const livroService = require('../services/livro.service');

const livroController = {
    async cadastrar(req, res) {
        try {
            const novoLivro = await livroService.cadastrar(req.body);
            return res.status(201).json({
                msg: 'Livro criado com sucesso',
                livro: novoLivro
            })
        } catch (error) {
            //console.error(error);
            const code = error.message.includes('Todos os campos são obrigatórios')
                || error.message.includes('Ano de publicação deve ser um número') 
                || error.message.includes('Preço deve ser maior que zero') 
                || error.message.includes('Título deve ter pelo menos 2 caracteres')
                || error.message.includes('Gênero inválido')
                || error.message.includes('Preço deve ser um número')
                || error.message.includes('Título inválido')
                || error.message.includes('Autor inválido')

                ? 400 : 500
            return res.status(code).json({
                msg: error.message
            })
        }
    }
}

module.exports = livroController;