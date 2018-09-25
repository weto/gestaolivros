var i18n = require('../config/i18n')();
var dao = require('../dao/AutorApiDAO');

i18n.init;

exports.findAll = function(autor, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findAll(autor)
		.then(autores => {
			resolve(autores);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.save = function(autor, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.save(autor)
		.then(autores => {
			resolve(autores);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.edit = function(autor, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.edit(autor)
		.then(autores => {
			resolve(autores);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.delete = function(autor, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.delete(autor)
		.then(autores => {
			resolve(autores);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findById = function(autor, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findById(autor)
		.then(autores => {
			resolve(autores);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findEditora = function(autor, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findEditora(autor)
		.then(autores => {
			resolve(autores);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findLivros = function(autor, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findLivros(autor)
		.then(autores => {
			resolve(autores);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findNome = function(autor, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findNome(autor)
		.then(autores => {
			resolve(autores);
		}).catch(err => {
			reject(err);
	    });
    });
};


