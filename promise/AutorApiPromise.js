var repository = require("../repository/AutorApiRepository");

exports.findAll = function () {
    return new Promise(function( resolve, reject ) { 
        repository.findAll()
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.save = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.save(livro)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.edit = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.edit(livro)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.delete = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.delete(livro)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}
exports.findById = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.findById(livro)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findEditora = function () {
    return new Promise(function( resolve, reject ) { 
        repository.findEditora()
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findLivros = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.findLivros(livro)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findNome = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.findNome(livro)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}
