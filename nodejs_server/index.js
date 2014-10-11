///////////////////////////////////
// Server Node.js full websocket //
///////////////////////////////////


/**
 * Declare the server HTTP
 * listen to the port 8080
 */
var http = require('http');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

server.listen(8888, function() {
    console.log((new Date()) + ' Server is listening on port 8888');
});

/**
 * Import websocket module
 * on the server HTTP
 */
var WebSocketServer = require('websocket').server;

/**
 * Create the websocket server
 */
wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

/**
 * Declare the variable connections for rooms and users
 */
var connections = new Array();

/**
 * When a user connects
 */
wsServer.on('request', function(request) {

    //-- Variables declarations--//
    var guest = false;
    var room = '';

    /**
     * Accept the connection
     */
    var connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection accepted.');

    /**
     * When we receive signal message from the client
     */
    connection.on('message', function(message) {
        message = JSON.parse(message.utf8Data);
        console.log(message);
        switch(message["type"]) {

            /**
             * When a user is invited
             * join the room
             */
            case "INVITE" :
                guest = true;
                room = message["value"];
                console.log(message);
                connections[room].push(connection);
            break;

            /**
             * If you are the first user to connect
             * create room
             */
            case "GETROOM" :
                room = Math.floor(Math.random()*1000001).toString();
                message = JSON.stringify({'type' : 'GETROOM', 'value': room});
                connection.send(message);
                connections.push(room);
                console.log(room);
                connections[room] = new Array();
                connections[room].push(connection);
            break;

            /**
             * When a user send a SDP message
             * broadcast to all users in the room
             */
            case "candidate" : case "offer" : case "answer" :
                console.log(message);
                connections[room].forEach(function(destination) {
                    if(destination != connection) {
                        message = JSON.stringify(message);
                        destination.send(message);
                    }
                });
            break;
        }
    });


    /**
     * When the user hang up
     * broadcast bye signal to all users in the room
     */
    connection.on('close', function(reasonCode, description) {
        if(connections[room]) {
            connections[room].forEach(function(destination) {
                if(destination != connection) {
                    var message = JSON.stringify({'type' : 'BYE', 'value': ''});
                    destination.send(message);
                }
            });
        }
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });

})
