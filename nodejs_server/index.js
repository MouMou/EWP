var http = require("http");

var server = http.createServer();
var app = server.listen(8888);

var io = require('socket.io').listen(app);

io.sockets.on('connection', function (client) {

	var guest = false;
	var room = '';

	client.on("invite", function(invitation){
		room = invitation;
		guest = true;
		client.join(room);
	});

	console.log(guest);

	if(!guest){
		room = Math.floor(Math.random()*1000001).toString();
		client.emit('getRoom', {roomId : room});
		client.join(room);
	}
	
  	client.on('message', function(message) {
        var broadcastMessage = message;
        client.broadcast.to(room).send(broadcastMessage);
    });

 	client.on('exit',function(){
    	client.broadcast.to(room).send('BYE');
  	});

  	client.on('disconnect',function(){
    	client.broadcast.to(room).emit('close');
  	});
});