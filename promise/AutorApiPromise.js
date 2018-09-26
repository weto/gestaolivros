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

exports.save = function (autor) {
    return new Promise(function( resolve, reject ) { 
        repository.save(autor)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.edit = function (autor) {
    return new Promise(function( resolve, reject ) { 
        repository.edit(autor)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.delete = function (autor) {
    return new Promise(function( resolve, reject ) { 
        repository.delete(autor)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}
exports.findById = function (autor) {
    return new Promise(function( resolve, reject ) { 
        repository.findById(autor)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findEditora = function (autor) {
    return new Promise(function( resolve, reject ) { 
        repository.findEditora(autor)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findLivros = function (autor) {
    return new Promise(function( resolve, reject ) { 
        repository.findLivros(autor)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findNome = function (autor) {
    return new Promise(function( resolve, reject ) { 
        repository.findNome(autor)
        .then(autores => {
            resolve(autores);
        }).catch(err => {
            reject(err);
        });
    });
}
