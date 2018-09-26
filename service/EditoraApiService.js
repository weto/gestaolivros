var promise = require("../promise/EditoraApiPromise");

exports.findAll = function(editora, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findAll(editora, req, res)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.save = function(editora, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.save(editora, req, res)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.edit = function(editora, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.edit(editora, req, res)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.delete = function(editora, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.delete(editora, req, res)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findById = function(editora, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findById(editora, req, res)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}
exports.findAutores = function(editora, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findAutores(editora, req, res)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findLivros = function(editora, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findLivros(editora, req, res)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findNome = function(editora, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findNome(editora, req, res)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}


