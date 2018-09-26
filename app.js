var express = require('express');
var app = express();
var i18n = require('./config/i18n')();

app.use(i18n.init);

console.log("Versão APIVSM: "+i18n.__("versao"));

var livros = require('./controller/LivrosController');
app.use('/api/v1/livros', livros);

var autores = require('./controller/AutoresController');
app.use('/api/v1/autores', autores);

var editores = require('./controller/EditoraController');
app.use('/api/v1/editoras', editores);

var clientes = require('./controller/ClientesController');
app.use('/api/v1/clientes', clientes);

var carrinho = require('./controller/CarrinhoController');
app.use('/api/v1/carrinho', carrinho);

module.exports = app;
