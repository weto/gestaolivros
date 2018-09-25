var i18n = require('../config/i18n')();
var dao = require('../dao/LivroApiDAO');

i18n.init;

exports.findAll = function(livro, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findAll(livro)
		.then(livros => {
			resolve(livros);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.save = function(livro, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.save(livro)
		.then(livros => {
			resolve(livros);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.edit = function(livro, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.edit(livro)
		.then(livros => {
			resolve(livros);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.delete = function(livro, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.delete(livro)
		.then(livros => {
			resolve(livros);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findEditora = function(livro, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findEditora(livro)
		.then(livros => {
			resolve(livros);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findAutores = function(livro, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findAutores(livro)
		.then(livros => {
			resolve(livros);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findComentarios = function(livro, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findComentarios(livro)
		.then(livros => {
			resolve(livros);
		}).catch(err => {
			reject(err);
	    });
    });
};
