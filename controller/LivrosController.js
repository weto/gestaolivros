var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var httpStatus = require('http-status');
var service = require('../service/LivroApiService');
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function (req, res) {
  service.findAll(req.body, req, res)
  .then(livros => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, livros: livros });
  }).catch(err => {
    log.info("#### ROTA / LIVRO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.post('/', function (req, res) {
  service.save(req.body, req, res)
  .then(livros => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, livros: livros });
  }).catch(err => {
    log.info("#### ROTA / LIVRO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.put('/:idLivro', function (req, res) {
  service.edit(req.params, req, res)
  .then(livros => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, livros: livros });
  }).catch(err => {
    log.info("#### ROTA / LIVRO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.delete('/:idLivro', function (req, res) {
  service.delete(req.body, req, res)
  .then(livros => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, livros: livros });
  }).catch(err => {
    log.info("#### ROTA / LIVRO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.get('/:idLivro', function (req, res) {
  console.log(req.param);
  service.findById(req.param, req, res)
  .then(livros => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, livros: livros });
  }).catch(err => {
    log.info("#### ROTA / LIVRO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.get('/:idLivro/autores', function (req, res) {
  service.findAutores(req.body, req, res)
  .then(livros => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, livros: livros });
  }).catch(err => {
    log.info("#### ROTA / LIVRO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.get('/:idLivro/editoras', function (req, res) {
  service.findEditora(req.body, req, res)
  .then(livros => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, livros: livros });
  }).catch(err => {
    log.info("#### ROTA / LIVRO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.get('/:idLivro/comentarios', function (req, res) {
  service.findComentarios(req.body, req, res)
  .then(livros => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, livros: livros });
  }).catch(err => {
    log.info("#### ROTA / LIVRO ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

module.exports = router;
