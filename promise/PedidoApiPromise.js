var repository = require("../repository/PedidoApiRepository");

exports.findById = function (pedido) {
    return new Promise(function( resolve, reject ) { 
        repository.findById(pedido)
        .then(pedidos => {
            resolve(pedidos);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.pagamento = function (pedido) {
    return new Promise(function( resolve, reject ) { 
        repository.pagamento(pedido)
        .then(pedidos => {
            resolve(pedidos);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.cancelamento = function (pedido) {
    return new Promise(function( resolve, reject ) { 
        repository.cancelamento(pedido)
        .then(pedidos => {
            resolve(pedidos);
        }).catch(err => {
            reject(err);
        });
    });
}
