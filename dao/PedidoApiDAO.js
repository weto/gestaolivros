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

async function autorizacaoCartaoCredito(pedido) {
	const objetoParam = {
		numero: pedido.codigo,
		valor: pedido.valor,
		pedidos_id: pedido.id, 
	}
	const pedidoReturn = await axios.post('http://localhost:5003/api/v1/public/pagamentos', { headers: objetoParam }).then((retorno) => {
        return retorno.data;
	})
	return pedidoReturn;
}

async function auditoriaTransacao(pedido) {
	const objetoParam = {
		idPedidos: pedido.id, 
	}
	const auditoriaReturn = await axios.post('http://localhost:3003/api/v1/auditorias/pedidos', { headers: objetoParam }).then((retorno) => {
        return retorno.data;
	})
	return auditoriaReturn;
}

exports.pagamento = function(carrinho) {
	return new Promise(function(resolve, reject) {
		const novoPedido = {
            "id": ++idDinamico,
            "codigo": "cod ".concat(carrinho.idPedido),
            "situacao": "Aberto",
            "cliente": {
                "id": 1,
                "nome": "Cliente ".concat(idDinamico)
            }
		};

		autorizacaoCartaoCredito(novoPedido)
		.then(autorizacaoReturn => {
			return autorizacaoReturn;
		}).then(autorizacao => {
			auditoriaTransacao(novoPedido).then(autorizacaoReturn => {
				if(gestaoPedido.push(novoPedido)) {
					resolve(gestaoPedido);
				} else {
					reject('Erro ao realizar pagamento');
				}
			}).catch((error) => {
				reject(error);
			})
		}).catch((error) => {
			reject(error);
		})
	});
}

exports.cancelamento = function(carrinho) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoPedido);
	});
}
