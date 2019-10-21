window.onload = function() {
	var socket = io('http://localhost:3000');
	socket.on('connect', function() {
		console.log('I here!!!');
		
		socket.emit('some_event', { data: 'ChercasOFF is bad student' });
	});
	
	socket.on('some_event2', function(data) {
		console.log(data);
	});
};
