var promise = require("../promise/AutorApiPromise");

exports.findAll = function(autor, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findAll(autor, req, res)
        .then(autors => {
            resolve(autors);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.save = function(autor, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.save(autor, req, res)
        .then(autors => {
            resolve(autors);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.edit = function(autor, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.edit(autor, req, res)
        .then(autors => {
            resolve(autors);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.delete = function(autor, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.delete(autor, req, res)
        .then(autors => {
            resolve(autors);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findById = function(autor, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findById(autor, req, res)
        .then(autors => {
            resolve(autors);
        }).catch(err => {
            reject(err);
        });
    });
}
exports.findEditora = function(autor, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findEditora(autor, req, res)
        .then(autors => {
            resolve(autors);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findLivros = function(autor, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findLivros(autor, req, res)
        .then(autors => {
            resolve(autors);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findautors = function(autor, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findautors(autor, req, res)
        .then(autors => {
            resolve(autors);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.findNome = function(autor, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findNome(autor, req, res)
        .then(autors => {
            resolve(autors);
        }).catch(err => {
            reject(err);
        });
    });
}


