var repository = require("../repository/EditoraApiRepository");

exports.findAll = function () {
    return new Promise(function( resolve, reject ) { 
        repository.findAll()
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.save = function (editora) {
    return new Promise(function( resolve, reject ) { 
        repository.save(editora)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.edit = function (editora) {
    return new Promise(function( resolve, reject ) { 
        repository.edit(editora)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.delete = function (editora) {
    return new Promise(function( resolve, reject ) { 
        repository.delete(editora)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}
exports.findById = function (editora) {
    return new Promise(function( resolve, reject ) { 
        repository.findById(editora)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findAutores = function (editora) {
    return new Promise(function( resolve, reject ) { 
        repository.findAutores(editora)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findLivros = function (editora) {
    return new Promise(function( resolve, reject ) { 
        repository.findLivros(editora)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findNome = function (editora) {
    return new Promise(function( resolve, reject ) { 
        repository.findNome(editora)
        .then(editoras => {
            resolve(editoras);
        }).catch(err => {
            reject(err);
        });
    });
}
