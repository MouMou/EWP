var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

var connections = new Array();


wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    var guest = false;
	var room = '';
    var connection = request.accept(null, request.origin);

    console.log((new Date()) + ' Connection accepted.');

    connection.on('message', function(message) {
        if (message.utf8Data.indexOf("\"INVITE\"", 0) != -1){
            var messages = message.utf8Data.split(':');
            room = messages[1];
            guest = true;
            connection.sendUTF(message.utf8Data);
        }
        else {
        	connections[room].forEach(function(destination) {
            	if(destination != connection)
            		destination.sendUTF(message.utf8Data);
            });
        }
    });


    if(!guest){
		room = Math.floor(Math.random()*1000001).toString();
		connection.send('GETROOM:'+room);
		connections[room].push(connection);
	}

    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
})