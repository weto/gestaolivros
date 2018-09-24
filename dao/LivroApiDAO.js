var i18n = require('../config/i18n')();
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));
const gestaoLivros = require('./../gestaolivros.json')

exports.findAll = function(user) {
	return new Promise(function(resolve, reject) {
		resolve(gestaoLivros);
	});
}
