var promise = require("../promise/LivroApiPromise");

exports.findAll = function(livro, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findAll(livro, req, res)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.save = function(livro, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.save(livro, req, res)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.edit = function(livro, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.edit(livro, req, res)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.delete = function(livro, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.delete(livro, req, res)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findById = function(livro, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findById(livro, req, res)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}
exports.findEditora = function(livro, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findEditora(livro, req, res)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findAutores = function(livro, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findAutores(livro, req, res)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findComentarios = function(livro, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findComentarios(livro, req, res)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findNome = function(livro, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findNome(livro, req, res)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}


