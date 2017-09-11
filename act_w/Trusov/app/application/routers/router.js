
var express = require('express');
var router = express.Router();

var BaseRouter = require('./baseRouter');
var Mathematic = require('./mathematic/mathematic');

var baseRouter = new BaseRouter();
var mathematic = new Mathematic();

router.get('/square', function(req, res, next) {
  var a = req.query.a - 0;
  var b = req.query.b - 0;
  var c = req.query.c - 0;
  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    return res.send(mathematic.square(a, b, c));
  }
  res.send(baseRouter.error(2000));
});

router.get('/cube', function(req, res, next) {
  res.send(mathematic.cube(a, b, c));
});

router.get('/fourth', function(req, res, next) {
//  var param1 = req.query.param1 || null;
//  var param2 = req.query.param2 || null;
  res.send('fourth');
});

router.get('/*', function(req, res, next) {
  res.send(baseRouter.error());
});

module.exports = router;

