function Chat(io) {
	io.sockets.on('connection', function(client) {
	
		console.log('some client connection to server!!!');
		
		client.on('some_event', function(data) {
			console.log(data);
			
			client.emit('some_event2', { data: data.data + ', he`s not'});
			
		});
	});
}
module.exports = Chat;
