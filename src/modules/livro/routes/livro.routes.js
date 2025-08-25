const express = require('express');
const router = express.Router()
const livroController = require('../controllers/livro.controller');

//cadastrar novo livro
router.post('/livros', livroController.cadastrar);

module.exports = router;
