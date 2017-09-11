'use strict'

var express = require('express');
var app = express();

var router = require('./application/routers/router');

app.use(express.static(__dirname + '/public'));

app.use('/', router);

var server = app.listen(3000, function() {
  console.log('server start at port 3000');
});
