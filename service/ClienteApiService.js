var promise = require("../promise/ClienteApiPromise");

exports.findAll = function(cliente, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findAll(cliente, req, res)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.save = function(cliente, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.save(cliente, req, res)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.edit = function(cliente, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.edit(cliente, req, res)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.delete = function(cliente, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.delete(cliente, req, res)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findById = function(cliente, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findById(cliente, req, res)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}
exports.findPedidos = function(cliente, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findPedidos(cliente, req, res)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findNome = function(cliente, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findNome(cliente, req, res)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}


