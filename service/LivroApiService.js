var promise = require("../promise/LivroApiPromise");

exports.findAll = function(usuario, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findAll(usuario, req, res)
        .then(usuarios => {
            resolve(usuarios);
        }).catch(err => {
            reject(err);
        });
    });
}
