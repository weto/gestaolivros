var i18n = require('../config/i18n')();
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));
const gestaoLivros = require('./../gestaolivros.json')

exports.findAll = function(livro) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoLivros);
	});
}

exports.save = function(livro) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoLivros);
	});
}

exports.edit = function(livro) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoLivros);
	});
}

exports.delete = function(livro) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoLivros);
	});
}

exports.findById = function(livro) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoLivros);
	});
}

exports.findEditora = function(livro) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoLivros);
	});
}

exports.findAutores = function(livro) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoLivros);
	});
}

exports.findComentarios = function(livro) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoLivros);
	});
}
