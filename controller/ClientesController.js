var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var httpStatus = require('http-status');
var service = require('../service/ClienteApiService');
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function (req, res) {
  service.findAll(req.body, req, res)
  .then(clientes => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, clientes: clientes });
  }).catch(err => {
    log.info("#### ROTA / CLIENTE ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.post('/', function (req, res) {
  service.save(req.body, req, res)
  .then(clientes => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, clientes: clientes });
  }).catch(err => {
    log.info("#### ROTA / CLIENTE ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.put('/:idCliente', function (req, res) {
  const params = {};
  params.idCliente = req.params.idCliente;
  params.nome = req.body.nome;

  service.edit(params, req, res)
  .then(clientes => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, clientes: clientes });
  }).catch(err => {
    log.info("#### ROTA / CLIENTE ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.delete('/:idCliente', function (req, res) {
  service.delete(req.params, req, res)
  .then(clientes => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, clientes: clientes });
  }).catch(err => {
    log.info("#### ROTA / CLIENTE ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.get('/:idCliente', function (req, res) {
  service.findById(req.params, req, res)
  .then(clientes => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, clientes: clientes });
  }).catch(err => {
    log.info("#### ROTA / CLIENTE ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.get('/:idCliente/pedidos', function (req, res) {
  service.findPedidos(req.params, req, res)
  .then(pedidos => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, pedidos: pedidos });
  }).catch(err => {
    log.info("#### ROTA / CLIENTE ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.get('/pesquisa/:nome?', function (req, res) {
  service.findNome(req.params, req, res)
  .then(clientes => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, clientes: clientes });
  }).catch(err => {
    log.info("#### ROTA / CLIENTE ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

module.exports = router;
