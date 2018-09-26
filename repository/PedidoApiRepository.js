var i18n = require('../config/i18n')();
var dao = require('../dao/PedidoApiDAO');

i18n.init;

exports.findById = function(pedido, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findById(pedido)
		.then(pedidos => {
			resolve(pedidos);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.pagamento = function(pedido, req, res){
	return new Promise(function(resolve, reject ) {
		dao.pagamento(pedido)
		.then(pedidos => {
			resolve(pedidos);
		}).catch(err => {
			reject(err);
	    });
    });
};

exports.cancelamento = function(pedido, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.cancelamento(pedido)
		.then(pedidos => {
			resolve(pedidos);
		}).catch(err => {
			reject(err);
	    });
    });
};
