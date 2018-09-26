var i18n = require('../config/i18n')();
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));
const gestaoClientes = require('./../gestaoclientes.json');
let idDinamico = 2;

exports.findAll = function() {
	return new Promise(function(resolve, reject) {
		resolve(gestaoClientes);
	});
}

exports.save = function(cliente) {
	return new Promise(function(resolve, reject) {
		const clienteReturn = gestaoClientes.find(function (clienteP) {
			if(clienteP.nome === cliente.nome){
				return clienteP;
			}
		});

		if(clienteReturn){
			reject('cliente já existente');
		} else {
			const novoItem = {
				"id": ++idDinamico,
				"nome": cliente.nome,
			};
			if(gestaoClientes.push(novoItem)) {
				resolve('cliente adicionado com sucesso');
			} else {
				reject('Erro ao cadastrar cliente');
			}
		}
	});
}

exports.edit = function(cliente) {
	return new Promise(function(resolve, reject) {
		let statusAlteracao = false;
		gestaoClientes.map(function (clienteP) {
			if(clienteP.id === parseInt(cliente.idCliente)){
				clienteP.nome = cliente.nome;
				statusAlteracao = true;
			} 
		});
		if(statusAlteracao){
			resolve('cliente alterado com sucesso');
		}else{
			reject('cliente não encontrado')
		}
	});
}

exports.delete = function(cliente) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoclientes);
	});
}

exports.findById = function(cliente) {
	return new Promise(function(resolve, reject) {
		const clienteReturn = gestaoClientes.find(function (clienteP) { 
			if(clienteP.id === parseInt(cliente.idCliente)){
				return clienteP;
			} 
		});
		if(clienteReturn){
			resolve(clienteReturn);
		}else{
			reject('cliente não encontrado')
		}
	});
}

exports.findPedidos = function(cliente) {
	return new Promise(function(resolve, reject) {
		const clienteReturn = gestaoClientes.find(function (clienteP) {
			if(clienteP.id === parseInt(cliente.idCliente)){
				return clienteP;
			} 
		});
		if(clienteReturn){
			resolve(clienteReturn.pedido);
		}else{
			reject('pedido não encontrado')
		}
	});
}

exports.findNome = function(cliente) {
	return new Promise(function(resolve, reject) {
		const clienteReturn = gestaoClientes.find(function (clienteP) { 
			if(clienteP.nome === cliente.nome){
				return clienteP;
			}
		});
		if(clienteReturn){
			resolve(clienteReturn);
		}else{
			reject('cliente não encontrado')
		}
	});
}

