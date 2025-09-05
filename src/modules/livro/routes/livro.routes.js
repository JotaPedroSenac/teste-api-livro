const express = require('express');
const router = express.Router()
const livroController = require('../controllers/livro.controller');

//cadastrar novo livro
router.post('/livros', livroController.cadastrar);
//lisar todos os livros
router.get('/livros', livroController.listar);
//listar o livro por nome
router.get('/livros/busca', livroController.listarPorNome);
//listar livro por id
router.get('/livros/:livroId', livroController.listarPorId)

module.exports = router;
