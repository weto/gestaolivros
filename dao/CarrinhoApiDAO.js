var i18n = require('../config/i18n')();
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));
const gestaoCarrinho = require('./../gestaocarrinho.json');
let idDinamico = 2;

exports.findLivros = function() {
	return new Promise(function(resolve, reject) {
		resolve(gestaoCarrinho.livro);
	});
}

exports.adicionar = function(carrinho) {
	return new Promise(function(resolve, reject) {
		const novoItem = {
			"id": ++idDinamico,
			"nome": "Livro ".concat(idDinamico),
		};
		if(gestaoCarrinho.livro.push(novoItem)) {
			resolve('carrinho adicionado com sucesso');
		} else {
			reject('Erro ao cadastrar carrinho');
		}

	});
}

exports.remover = function(carrinho) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoCarrinho);
	});
}
