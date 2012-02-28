var http = require("http");

var server = http.createServer();
var app = server.listen(8888);

var io = require('socket.io').listen(app);

var guest = false;
var room = '';

io.sockets.on('connection', function (client) {

	client.on("invite", function(invitation){
		room = invitation;
		guest = true;
		client.join(room);
	});
	if(!guest){
		room = Math.floor(Math.random()*1000001).toString();
		client.emit('getRoom', {roomId : room});
		client.join(room);
	}
	
  	client.on('message', function(message) {
        var broadcastMessage = message;
        client.broadcast.to(room).send(broadcastMessage);
    });

    client.on('close', function() {

    });
});