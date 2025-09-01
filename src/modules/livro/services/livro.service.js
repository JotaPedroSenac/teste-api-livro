const livroModel = require('../models/livro.model');

class livroService {
    //cadastrar livros
    static async cadastrar(dados) {
        const { titulo, autor, ano_publicacao, genero, preco } = dados;
        if (!titulo || !autor || !ano_publicacao || !genero || !preco) {
            throw new Error('Todos os campos são obrigatórios');
        }

        if (typeof ano_publicacao !== 'number') {
            throw new Error('Ano de publicação deve ser um número');
        }

        if (preco < 0) {
            throw new Error('Preço deve ser maior que zero');
        }

        if(typeof preco !== 'number'){
            throw new Error('Preço deve ser um número');
        }

        if (titulo.length < 2) {
            throw new Error('Título deve ter pelo menos 2 caracteres');
        }

        const generoValidos = ["Romance",
            "Ficção Científica",
            "Fantasia",
            "Suspense",
            "Terror",
            "Mistério",
            "Aventura",
            "História",
            "Biografia",
            "Poesia",
            "Drama",
            "Autoajuda",
            "Religião",
            "Infantil",
            "Didático"];

        if(!generoValidos.includes(genero)){
            throw new Error('Gênero inválido');
        }

        // impede sql injection em título e autor. Os outros campos já impedem com as tipagens definidas.
        const sqlInjectionRegex = /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|;|--)\b)/i;

        if(sqlInjectionRegex.test(titulo)){
            throw new Error('Título inválido');
        }

        if(sqlInjectionRegex.test(autor)){
            throw new Error('Autor inválido');
        }

        const existe = await livroModel.findOne({
            where: {
                titulo
            }
        })

        if (existe) throw new Error('Este livro já está cadastrado!');

        const novoLivro = await livroModel.create({ titulo, autor, ano_publicacao, genero, preco });
        return novoLivro;
    }
}

module.exports = livroService;