var i18n = require('../config/i18n')();
var dao = require('../dao/LivroApiDAO');

i18n.init;

exports.findAll = function(user, req, res){
	return new Promise(function(resolve, reject ) { 
		dao.findAll(user)
		.then(users => {
			resolve(users);
		}).catch(err => {
			reject(err);
	    });
    });
};
