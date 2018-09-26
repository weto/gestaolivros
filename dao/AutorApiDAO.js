var i18n = require('../config/i18n')();
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));
const gestaoAutores = require('./../gestaoautores.json');
const gestaoLivros = require('./../gestaolivros.json');
let idDinamico = 2;

exports.findAll = function() {
	return new Promise(function(resolve, reject) {
		resolve(gestaoAutores);
	});
}

exports.save = function(autor) {
	return new Promise(function(resolve, reject) {
		const autorReturn = gestaoAutores.find(function (autorP) {
			if(autorP.nome === autor.nome){
				return autorP;
			}
		});

		if(autorReturn){
			reject('Autor já existente');
		} else {
			const novoItem = {
				"id": ++idDinamico,
				"nome": autor.nome,
			};
			if(gestaoAutores.push(novoItem)) {
				resolve('Autor adicionado com sucesso');
			} else {
				reject('Erro ao cadastrar autor');
			}
		}
	});
}

exports.edit = function(autor) {
	return new Promise(function(resolve, reject) {
		let statusAlteracao = false;
		gestaoAutores.map(function (autorP) {
			if(autorP.id === parseInt(autor.idAutor)){
				autorP.nome = autor.nome;
				statusAlteracao = true;
			} 
		});
		if(statusAlteracao){
			resolve('Autor alterado com sucesso');
		}else{
			reject('Autor não encontrado')
		}
	});
}

exports.delete = function(autor) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoAutores);
	});
}

exports.findById = function(autor) {
	return new Promise(function(resolve, reject) {
		const autorReturn = gestaoAutores.find(function (autorP) { 
			if(autorP.id === parseInt(autor.idAutor)){
				return autorP;
			} 
		});
		if(autorReturn){
			resolve(autorReturn);
		}else{
			reject('Autor não encontrado')
		}
	});
}

exports.findEditora = function(autor) {
	return new Promise(function(resolve, reject) {
		const autorReturn = gestaoAutores.find(function (autorP) {
			if(autorP.id === parseInt(autor.idAutor)){
				return autorP;
			} 
		});
		if(autorReturn){
			resolve(autorReturn.editora);
		}else{
			reject('Editora não encontrado')
		}
	});
}

exports.findLivros = function(autor) {
	return new Promise(function(resolve, reject) {
		const autorReturn = gestaoAutores.find(function (autorP) {
			if(autorP.id === parseInt(autor.idAutor)){
				return autorP;
			} 
		});
		if(autorReturn){
			resolve(autorReturn.livro);
		}else{
			reject('Livro não encontrado')
		}
	});
}

exports.findNome = function(autor) {
	return new Promise(function(resolve, reject) {
		const autorReturn = gestaoAutores.find(function (autorP) { 
			if(autorP.nome === autor.nome){
				return autorP;
			}
		});
		if(autorReturn){
			resolve(autorReturn);
		}else{
			reject('Autor não encontrado')
		}
	});
}

