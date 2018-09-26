var promise = require("../promise/CarrinhoApiPromise");

exports.findLivros = function(livro, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findLivros(livro, req, res)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.adicionar = function(livro, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.adicionar(livro, req, res)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.remover = function(livro, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.remover(livro, req, res)
        .then(livros => {
            resolve(livros);
        }).catch(err => {
            reject(err);
        });
    });
}
