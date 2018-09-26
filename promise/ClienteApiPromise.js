var repository = require("../repository/ClienteApiRepository");

exports.findAll = function () {
    return new Promise(function( resolve, reject ) { 
        repository.findAll()
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.save = function (clientes) {
    return new Promise(function( resolve, reject ) { 
        repository.save(clientes)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.edit = function (clientes) {
    return new Promise(function( resolve, reject ) { 
        repository.edit(clientes)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.delete = function (clientes) {
    return new Promise(function( resolve, reject ) { 
        repository.delete(clientes)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}
exports.findById = function (clientes) {
    return new Promise(function( resolve, reject ) { 
        repository.findById(clientes)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findPedidos = function (clientes) {
    return new Promise(function( resolve, reject ) { 
        repository.findPedidos(clientes)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findNome = function (clientes) {
    return new Promise(function( resolve, reject ) { 
        repository.findNome(clientes)
        .then(clientes => {
            resolve(clientes);
        }).catch(err => {
            reject(err);
        });
    });
}
