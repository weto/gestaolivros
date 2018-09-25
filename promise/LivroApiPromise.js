var repository = require("../repository/LivroApiRepository");

exports.findAll = function () {
    return new Promise(function( resolve, reject ) { 
        repository.findAll()
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.save = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.save(livro)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.edit = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.edit(livro)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.delete = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.delete(livro)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}
exports.findById = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.findById(livro)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findEditora = function () {
    return new Promise(function( resolve, reject ) { 
        repository.findEditora()
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findAutores = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.findAutores(livro)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findComentarios = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.findComentarios(livro)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findNome = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.findNome(livro)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}
