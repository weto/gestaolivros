var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var httpStatus = require('http-status');
var service = require('../service/CarrinhoApiService');
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/:idLivro/livros', function (req, res) {
    service.findLivros(req.params, req, res)
    .then(livros => {
        res.status(httpStatus.OK).json({ status: httpStatus.OK, livros: livros });
    }).catch(err => {
        log.info("#### ROTA / LIVRO ####");
        log.error(err);
        res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
    });
});

router.post('/:idLivro', function (req, res) {
  console.log(req.body);
  service.adicionar(req.body, req, res)
  .then(livros => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, livros: livros });
  }).catch(err => {
    log.info("#### ROTA / LIVRO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.delete('/:idLivro', function (req, res) {
  service.remover(req.params, req, res)
  .then(livros => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, livros: livros });
  }).catch(err => {
    log.info("#### ROTA / LIVRO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

module.exports = router;
