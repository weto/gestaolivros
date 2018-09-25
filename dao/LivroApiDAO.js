var i18n = require('../config/i18n')();
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));
const gestaoLivros = require('./../gestaolivros.json');
let idDinamico = 2;

exports.findAll = function() {
	return new Promise(function(resolve, reject) {
		resolve(gestaoLivros);
	});
}

exports.save = function(livro) {
	return new Promise(function(resolve, reject) {
		const livroReturn = gestaoLivros.find(function (livroP) {
			if(livroP.nome === livro.nome){
				return livroP;
			}
		});

		if(livroReturn){
			reject('Livro já existente');
		} else {
			const novoItem = {
				"id": ++idDinamico,
				"nome": livro.nome,
				"autor": {},
				"editora": {},
				"pedido": []
			};
	
			if(gestaoLivros.push(novoItem)) {
				resolve('Livro adicionado com sucesso');
			} else {
				reject('Erro ao cadastrar Livro');
			}
		}
	});
}

exports.edit = function(livro) {
	return new Promise(function(resolve, reject) {
		let statusAlteracao = false;
		gestaoLivros.map(function (livroP) {
			if(livroP.id === parseInt(livro.idLivro)){
				livroP.nome = livro.nome;
				statusAlteracao = true;
			} 
		});

		if(statusAlteracao){
			resolve('Livro alterado com sucesso');
		}else{
			reject('Livro não encontrado')
		}
	});
}

exports.delete = function(livro) {
	return new Promise(function(resolve, reject) {
		gestaoLivros.re
		resolve(gestaoLivros);
	});
}

exports.findById = function(livro) {
	return new Promise(function(resolve, reject) {
		const livroReturn = gestaoLivros.find(function (livroP) { 
			if(livroP.id === parseInt(livro.idLivro)){
				return livroP;
			} 
		});

		if(livroReturn){
			resolve(livroReturn);
		}else{
			reject('Livro não encontrado')
		}
	});
}

exports.findEditora = function(livro) {
	return new Promise(function(resolve, reject) {
		const livroReturn = gestaoLivros.find(function (livroP) { 
			if(livroP.id === parseInt(livro.idLivro)){
				return livroP;
			} 
		});

		if(livroReturn){
			resolve(livroReturn.editora);
		}else{
			reject('Editora não encontrado')
		}
	});
}

exports.findAutores = function(livro) {
	return new Promise(function(resolve, reject) {
		const livroReturn = gestaoLivros.find(function (livroP) { 
			if(livroP.id === parseInt(livro.idLivro)){
				return livroP;
			} 
		});

		if(livroReturn){
			resolve(livroReturn.autor);
		}else{
			reject('Autor não encontrado')
		}
	});
}

exports.findComentarios = function(livro) {
	return new Promise(function(resolve, reject) {
		const livroReturn = gestaoLivros.find(function (livroP) { 
			if(livroP.id === parseInt(livro.idLivro)){
				return livroP;
			} 
		});

		if(livroReturn){
			resolve(livroReturn.comentario);
		}else{
			reject('Comentário não encontrado')
		}
	});
}

exports.findNome = function(livro) {
	return new Promise(function(resolve, reject) {
		const livroReturn = gestaoLivros.find(function (livroP) { 
			if(livroP.nome === livro.nome){
				return livroP;
			}
		});

		if(livroReturn){
			resolve(livroReturn);
		}else{
			reject('Livro não encontrado')
		}
	});
}

