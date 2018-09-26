var i18n = require('../config/i18n')();
var dao = require('../dao/ClienteApiDAO');

i18n.init;

exports.findAll = function(cliente, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findAll(cliente)
		.then(clientes => {
			resolve(clientes);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.save = function(cliente, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.save(cliente)
		.then(clientes => {
			resolve(clientes);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.edit = function(cliente, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.edit(cliente)
		.then(clientes => {
			resolve(clientes);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.delete = function(cliente, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.delete(cliente)
		.then(clientes => {
			resolve(clientes);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findById = function(cliente, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findById(cliente)
		.then(clientes => {
			resolve(clientes);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findPedidos = function(cliente, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findPedidos(cliente)
		.then(clientes => {
			resolve(clientes);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.findNome = function(cliente, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findNome(cliente)
		.then(clientes => {
			resolve(clientes);
		}).catch(err => {
			reject(err);
	    });
    });
};


