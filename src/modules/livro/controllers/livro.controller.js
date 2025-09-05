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
    },

    //listar livros

    async listar(req, res) {
        try {
            const livros = await livroService.listar();
            return res.status(200).json(
                livros
            )
        } catch (error) {
            return res.status(400).json({
                msg: error.message
            })
        }
    },

    //listar por nome

    async listarPorNome(req, res) {
        try {
            const livroPorNome = await livroService.listarPorNome(req.query.titulo);

            if (!livroPorNome) {
                return res.status(404).json({
                    msg: 'Livro não encontrado'
                })
            }

            return res.status(200).json({
                msg: 'Livro encontrado',
                livros: [livroPorNome]
            });
        } catch (error) {
            return res.status(400).json({
                msg: error.message
            })
        }
    },

    //listar por id
    async listarPorId(req, res) {
        try {
            const livroPorId = await livroService.listarPorId(req.params.livroId);

            if (!livroPorId) {
                return res.status(404).json({
                    msg: 'Livro não encontrado'
                })
            }

            return res.status(200).json({
                msg: 'Livro encontrado',
                livro: livroPorId
            })
        } catch (error) {
            return res.status(400).json({
                msg: error.message
            })
        }
    },

    //atualizar
    async atualizar(req, res){
        try {
            const livroAtualizado = await livroService.atualizar(req.params.livroId, req.body);
            return res.status(200).json({
                msg: 'Livro atualizado com sucesso',
                livro: livroAtualizado
            })
        } catch (error) {
            if(error.message === 'Livro não encontrado'){
                return res.status(404).json({
                    msg: error.message
                })
            }
            return res.status(400).json({
                msg: error.message
            })
        }
    },

    //excluir
    async excluir(req, res){
        try {
            await livroService.excluir(req.params.livroId);
            return res.status(200).json({
                msg: 'Livro deletado com sucesso'
            })
        } catch (error) {
            if(error.message === 'Livro não encontrado'){
                return res.status(404).json({
                    msg: error.message
                })
            }
            return res.status(400).json({
                msg: error.message
            })
        }
    }
}

module.exports = livroController;