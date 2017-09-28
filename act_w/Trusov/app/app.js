'use strict'

var express = require('express');
var app = express();

var router = require('./application/routers/router');
var Mediator = require('./application/modules/mediator/mediator');

var mediator = new Mediator();

app.use(express.static(__dirname + '/public'));

app.use('/', router);

var server = app.listen(3000, function() {
	console.log('server start at port 3000');

	var TYPES = mediator.getTypes();
	mediator.subscribe(TYPES.SOME_EVENT, function (data) {
		console.log('1', data);
	});
	
	mediator.subscribe(TYPES.SOME_EVENT, function (data) {
		console.log('2', data);
	});

	mediator.call(TYPES.SOME_EVENT, 'vasya');
});
