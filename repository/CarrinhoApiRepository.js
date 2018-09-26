var i18n = require('../config/i18n')();
var dao = require('../dao/CarrinhoApiDAO');

i18n.init;

exports.findLivros = function(livro, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findLivros(livro)
		.then(livros => {
			resolve(livros);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.adicionar = function(livro, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.adicionar(livro)
		.then(livros => {
			resolve(livros);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.remover = function(livro, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.remover(livro)
		.then(livros => {
			resolve(livros);
		}).catch(err => {
			reject(err);
	    });
    });
};
