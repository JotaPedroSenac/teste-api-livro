const livroModel = require('../models/livro.model');

class livroService {
    //cadastrar livros
    static async cadastrar(dados){
        const {titulo, autor, ano_publicacao, genero, preco } = dados;
        if(!titulo || !autor || !ano_publicacao || !genero || !preco){
            throw new Error('Todos os campos são obrigatórios');
        }
        const existe = await livroModel.findOne({
            where:{
                titulo
            }
        })

        if (existe) throw new Error('Este livro já está cadastrado!');

        const novoLivro = await livroModel.create({titulo, autor, ano_publicacao, genero, preco});
        return novoLivro;
    }
}

module.exports = livroService;