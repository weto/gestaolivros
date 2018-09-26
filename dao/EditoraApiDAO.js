var i18n = require('../config/i18n')();
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));
const gestaoEditoras = require('./../gestaoeditoras.json');
let idDinamico = 2;

exports.findAll = function() {
	return new Promise(function(resolve, reject) {
		console.log('akiii');
		resolve(gestaoEditoras);
	});
}

exports.save = function(editora) {
	return new Promise(function(resolve, reject) {
		const editoraReturn = gestaoEditoras.find(function (editoraP) {
			if(editoraP.nome === editora.nome){
				return editoraP;
			}
		});

		if(editoraReturn){
			reject('editora já existente');
		} else {
			const novoItem = {
				"id": ++idDinamico,
				"nome": editora.nome,
			};
			if(gestaoEditoras.push(novoItem)) {
				resolve('editora adicionado com sucesso');
			} else {
				reject('Erro ao cadastrar editora');
			}
		}
	});
}

exports.edit = function(editora) {
	return new Promise(function(resolve, reject) {
		let statusAlteracao = false;
		gestaoEditoras.map(function (editoraP) {
			if(editoraP.id === parseInt(editora.idEditora)){
				editoraP.nome = editora.nome;
				statusAlteracao = true;
			} 
		});
		if(statusAlteracao){
			resolve('editora alterado com sucesso');
		}else{
			reject('editora não encontrado')
		}
	});
}

exports.delete = function(editora) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoEditoras);
	});
}

exports.findById = function(editora) {
	return new Promise(function(resolve, reject) {
		const editoraReturn = gestaoEditoras.find(function (editoraP) { 
			if(editoraP.id === parseInt(editora.idEditora)){
				return editoraP;
			} 
		});
		if(editoraReturn){
			resolve(editoraReturn);
		}else{
			reject('editora não encontrado')
		}
	});
}

exports.findAutores = function(editora) {
	return new Promise(function(resolve, reject) {
		const editoraReturn = gestaoEditoras.find(function (editoraP) {
			console.log(editoraP);
			if(editoraP.id === parseInt(editora.idEditora)){
				return editoraP;
			} 
		});
		if(editoraReturn){
			resolve(editoraReturn.autor);
		}else{
			reject('Editora não encontrado')
		}
	});
}

exports.findLivros = function(editora) {
	return new Promise(function(resolve, reject) {
		const editoraReturn = gestaoEditoras.find(function (editoraP) {
			if(editoraP.id === parseInt(editora.idEditora)){
				return editoraP;
			} 
		});
		if(editoraReturn){
			resolve(editoraReturn.livro);
		}else{
			reject('Livro não encontrado')
		}
	});
}

exports.findNome = function(editora) {
	return new Promise(function(resolve, reject) {
		const editoraReturn = gestaoEditoras.find(function (editoraP) { 
			if(editoraP.nome === editora.nome){
				return editoraP;
			}
		});
		if(editoraReturn){
			resolve(editoraReturn);
		}else{
			reject('editora não encontrado')
		}
	});
}

