var i18n = require('../config/i18n')();
var dao = require('../dao/EditoraApiDAO');

i18n.init;

exports.findAll = function(editora, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findAll(editora)
		.then(editoras => {
			resolve(editoras);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.save = function(editora, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.save(editora)
		.then(editoras => {
			resolve(editoras);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.edit = function(editora, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.edit(editora)
		.then(editoras => {
			resolve(editoras);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.delete = function(editora, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.delete(editora)
		.then(editoras => {
			resolve(editoras);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findById = function(editora, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findById(editora)
		.then(editoras => {
			resolve(editoras);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findAutores = function(editora, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findAutores(editora)
		.then(editoras => {
			resolve(editoras);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findLivros = function(editora, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findLivros(editora)
		.then(editoras => {
			resolve(editoras);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findNome = function(editora, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findNome(editora)
		.then(editoras => {
			resolve(editoras);
		}).catch(err => {
			reject(err);
	    });
    });
};


