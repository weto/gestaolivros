var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var httpStatus = require('http-status');
var service = require('../service/PedidoApiService');
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/:idPedido', function (req, res) {
  service.findById(req.params, req, res)
  .then(pedidos => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, pedidos: pedidos });
  }).catch(err => {
    log.info("#### ROTA / PEDIDO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});
  
router.post('/', function (req, res) {
  service.pagamento(req.body, req, res)
  .then(pedidos => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, pedidos: pedidos });
  }).catch(err => {
    log.info("#### ROTA / PEDIDO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.delete('/:idPedido', function (req, res) {
  service.cancelamento(req.params, req, res)
  .then(pedidos => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, pedidos: pedidos });
  }).catch(err => {
    log.info("#### ROTA / PEDIDO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

module.exports = router;
