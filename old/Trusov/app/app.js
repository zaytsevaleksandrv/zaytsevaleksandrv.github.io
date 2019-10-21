'use strict'

var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var router = require('./application/routers/router');
var Mediator = require('./application/modules/mediator/mediator');
var Chat = require('./application/modules/chat/chat');

var mediator = new Mediator();
var chat = new Chat(io);

app.use(express.static(__dirname + '/public'));

app.use('/', router);

server.listen(3000, function() {
	console.log('server start at port 3000');

	/*var TYPES = mediator.getTypes();
	mediator.subscribe(TYPES.SOME_EVENT, function (data) {
		console.log('1', data);
	});
	
	mediator.subscribe(TYPES.SOME_EVENT, function (data) {
		console.log('2', data);
	});

	mediator.call(TYPES.SOME_EVENT, 'vasya');*/
});



