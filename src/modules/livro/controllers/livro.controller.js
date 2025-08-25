const livroService = require('../services/livro.service');

const livroController  = {
    async cadastrar(req, res){
        try {
            const novoLivro = await livroService.cadastrar(req.body);
            return res.status(201).json({
                msg: 'Livro criado com sucesso',
                livro: novoLivro
            })
        } catch (error) {
            console.error(error);
            const code = error.message.includes('Todos os campos são obrigatórios') ? 400 : 500
            return res.status(code).json({
                erro: error.message
            })
        }
    }
}

module.exports = livroController;