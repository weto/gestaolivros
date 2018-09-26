var i18n = require('../config/i18n')();
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));
const gestaoPedido = require('./../gestaopedidos.json');
let idDinamico = 2;

exports.findById = function(pedido) {
	return new Promise(function(resolve, reject) {
		const pedidoReturn = gestaoPedido.find(function (pedidoP) { 
			if(pedidoP.id === parseInt(pedido.idPedido)){
				return pedidoP;
			} 
		});
		if(pedidoReturn){
			resolve(pedidoReturn);
		}else{
			reject('Pedido não encontrado')
		}
	});
}

exports.pagamento = function(carrinho) {
	return new Promise(function(resolve, reject) {
		const novoItem = {
            "id": ++idDinamico,
            "codigo": "cod ".concat(carrinho.idPedido),
            "situacao": "Aberto",
            "cliente": {
                "id": 1,
                "nome": "Cliente ".concat(idDinamico)
            }
		};

		if(gestaoPedido.push(novoItem)) {
			resolve(gestaoPedido);
		} else {
			reject('Erro ao realizar pagamento');
		}
	});
}

exports.cancelamento = function(carrinho) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoPedido);
	});
}
