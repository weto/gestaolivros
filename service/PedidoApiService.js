var promise = require("../promise/PedidoApiPromise");

exports.findById = function(pedido, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.findById(pedido, req, res)
        .then(pedidos => {
            resolve(pedidos);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.pagamento = function(pedido, req, res) {
	return new Promise( function(resolve, reject ) {
        promise.pagamento(pedido, req, res)
        .then(pedidos => {
            resolve(pedidos);
        }).catch(err => {
            reject(err);
        });
    });
}

exports.cancelamento = function(pedido, req, res) {
	return new Promise( function(resolve, reject ) { 
        promise.cancelamento(pedido, req, res)
        .then(pedidos => {
            resolve(pedidos);
        }).catch(err => {
            reject(err);
        });
    });
}
