var repository = require("../repository/CarrinhoApiRepository");

exports.findLivros = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.findLivros(livro)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.adicionar = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.adicionar(livro)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.remover = function (livro) {
    return new Promise(function( resolve, reject ) { 
        repository.remover(livro)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}
