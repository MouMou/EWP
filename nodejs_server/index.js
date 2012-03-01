var http = require("http");

var server = http.createServer();
var app = server.listen(8888);

var io = require('socket.io').listen(app);

var messages = new Array();

io.sockets.on('connection', function (client) {

	var guest = false;
	var room = '';

	client.on("invite", function(invitation){
		room = invitation;
		guest = true;
		client.join(room);
		messages[room] = new Array();
	});

	console.log(guest);

	if(!guest){
		room = Math.floor(Math.random()*1000001).toString();
		client.emit('getRoom', {roomId : room});
		client.join(room);
		messages[room] = new Array();
	}
	


  	client.on('message', function(message) {
        var broadcastMessage = message;
        client.broadcast.to(room).send(broadcastMessage);
    });

    // On donne la liste des messages (evenement cree du cote client)
	client.emit('recupererMessages', messages[room]);
	// Quand on recoit un nouveau message
	client.on('nouveauMessage', function (mess) {
		// On l'ajout au tableau (variable globale commune a tous les clients connectes au serveur)
		messages[room].push(mess);
		// On envoie a tout les clients connectes (sauf celui qui a appelle l'evenement) le nouveau message
		client.broadcast.to(room).emit('recupererNouveauMessage', mess);
	});

 	client.on('exit',function(){
    	client.broadcast.to(room).emit('bye');
  	});

  	client.on('disconnect',function(){
    	client.broadcast.to(room).emit('close');
  	});
});