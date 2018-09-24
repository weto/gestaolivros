var repository = require("../repository/LivroApiRepository");

exports.findAll = function () {
    return new Promise(function( resolve, reject ) { 
        repository.findAll()
        .then(usuarios => {
            resolve(usuarios);
        }).catch(err => {
            reject(err);
        });
    });
}
