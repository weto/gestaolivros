var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var httpStatus = require('http-status');
var service = require('../service/EditoraApiService');
var Log = require('log');
var fs = require('fs');
var log = new Log('info', fs.createWriteStream(__dirname + '/../log/file.log'));

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function (req, res) {
  service.findAll(req.body, req, res)
  .then(editoras => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, editoras: editoras });
  }).catch(err => {
    log.info("#### ROTA / EDITORA ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.post('/', function (req, res) {
  service.save(req.body, req, res)
  .then(editoras => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, editoras: editoras });
  }).catch(err => {
    log.info("#### ROTA / EDITORA ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.put('/:idEditora', function (req, res) {
  const params = {};
  params.idLivro = req.params.idLivro;
  params.nome = req.body.nome;

  service.edit(params, req, res)
  .then(editoras => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, editoras: editoras });
  }).catch(err => {
    log.info("#### ROTA / EDITORA ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.delete('/:idEditora', function (req, res) {
  service.delete(req.params, req, res)
  .then(editoras => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, editoras: editoras });
  }).catch(err => {
    log.info("#### ROTA / EDITORA ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.get('/:idEditora', function (req, res) {
  service.findById(req.params, req, res)
  .then(editoras => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, editoras: editoras });
  }).catch(err => {
    log.info("#### ROTA / EDITORA ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.get('/:idEditora/livros', function (req, res) {
  service.findLivros(req.params, req, res)
  .then(editoras => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, editoras: editoras });
  }).catch(err => {
    log.info("#### ROTA / EDITORA ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.get('/:idEditora/autores', function (req, res) {
  service.findAutores(req.params, req, res)
  .then(editoras => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, editoras: editoras });
  }).catch(err => {
    log.info("#### ROTA / EDITORA ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

router.get('/pesquisa/:nome?', function (req, res) {
  service.findNome(req.params, req, res)
  .then(editoras => {
    res.status(httpStatus.OK).json({ status: httpStatus.OK, editoras: editoras });
  }).catch(err => {
    log.info("#### ROTA / EDITORA ####");
    log.error(err);
    res.status(httpStatus.OK).json({ status: httpStatus.OK, message: err});
  });
});

module.exports = router;
