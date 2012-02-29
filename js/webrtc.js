//--Déclaration des variables--//
var localVideo;
var remoteVideo;
var status;  
var initiator;
var message;
var url;
var localStream;
var started = false; 
var channelReady = false;
var pc;
var socket;
var room;

//--Fonction Initialize()--//
$(document).ready(function() {
    console.log("Initializing");
    localVideo = $("#localVideo");
    remoteVideo = $("#remoteVideo");
    status = $("#status");
    openChannel();
    getUserMedia();


});

//--Fonctions Status()--//
resetStatus = function() {
    if (!initiator) {
        setStatus("<div class=\"alert\">Waiting for someone to join: <a href=\""+window.location.href+"?room="+room+"\">"+window.location.href+"?room="+room+"</a></div>");
    } else {
        setStatus("Initializing...");
    }
}
setStatus = function(state) {
    $('#footer').html(state);
}

//--Fonction openChannel()--//
openChannel = function() {
    socket = io.connect('http://localhost:8888/');

    socket
      .on('connect', onChannelOpened)
      .on('message', onChannelMessage)
      .on('error', onChannelError)
      .on('close', onChannelClosed);
      
    if(location.search.substring(1,5) == "room") {
      room = location.search.substring(6);
      socket.emit("invite", room);
      initiator =1;
    } else {
      socket.on('getRoom', function(data){
        room = data.roomId;
        resetStatus();
        initiator = 0;
      });
    }
}

//--Fonction getUserMedia()--//
getUserMedia = function() {
    try { 
        navigator.webkitGetUserMedia("video,audio", onUserMediaSuccess, onUserMediaError);
        console.log("Requested access to local media.");
    } catch (e) {
        console.log("getUserMedia error.");    
    }
}

//--Fonctions onUserMedia()--//
onUserMediaSuccess = function(stream) {
    console.log("User has granted access to local media.");
    url = webkitURL.createObjectURL(stream);
    localVideo.css("opacity", "1");
    localVideo.attr("src", url);
    localStream = stream;
    if (initiator) maybeStart();    
}
onUserMediaError = function(error) {
    console.log("Failed to get access to local media. Error code was " + error.code);
    alert("Failed to get access to local media. Error code was " + error.code + ".");    
}

//--Fonction maybeStart()--//
maybeStart = function() {
    if (!started && localStream && channelReady) {      
        setStatus("Connecting..."); 
        console.log("Creating PeerConnection.");
        createPeerConnection();  
        console.log("Adding local stream.");      
        pc.addStream(localStream);
        started = true;
    }
}

//--Fonction createPeerConnection()--//
createPeerConnection = function() {
    pc = new webkitPeerConnection("NONE", onSignalingMessage);  
    pc.onconnecting = onSessionConnecting;
    pc.onopen = onSessionOpened;
    pc.onaddstream = onRemoteStreamAdded;
    pc.onremovestream = onRemoteStreamRemoved;    
}

//--Fonction onSignalingMessage()--//
onSignalingMessage = function(message) {      
    console.log("onSignalingMessage " + message);
    socket.send(message);
}

//--Fonction onHangup()--//
onHangup = function() {
    console.log("Hanging up.");    
    localVideo.css("opacity", "0");    
    remoteVideo.css("opacity", "0");    
    pc.close();
    pc = null;
    socket.emit("exit");
    //io.disconnect();
    setStatus("<div class=\"alert alert-info\">You have left the call.</div>");    
}

//--Fonctions onChannel()--//
onChannelOpened = function() {    
    console.log('Channel opened.');
    channelReady = true;
    if (initiator) maybeStart();
}
onChannelMessage = function(message) {
    console.log('S->C: ' + message); 
    if (message != 'BYE') {
        if (message.indexOf("\"ERROR\"", 0) == -1) {        
            if (!initiator && !started) maybeStart();
            pc.processSignalingMessage(message);    
        }
    } else {
        console.log('Session terminated.');    
        remoteVideo.css("opacity", "0");
        remoteVideo.attr("src",null);
        initiator = 0;
        started = false;
        resetStatus();
    }
}
onChannelError = function() {    
    console.log('Channel error.');
}
onChannelClosed = function() {    
    console.log('Channel closed.');
}

//--Fonctions onSession()--//
onSessionConnecting = function(message) {      
    console.log("Session connecting.");
}
onSessionOpened = function(message) {      
    console.log("Session opened.");
}

//--Fonctions onRemoteStream()--//
onRemoteStreamAdded = function(event) {   
    console.log("Remote stream added.");
    url = webkitURL.createObjectURL(event.stream);
    remoteVideo.css("opacity", "1");
    remoteVideo.attr("src",url);
    setStatus("<div class=\"alert alert-success\">Is currently in video conference <button id=\"hangup\" class=\"btn btn-mini btn-danger pull-right\" onclick=\"onHangup()\">Hang Up</button></div>");
}
onRemoteStreamRemoved = function(event) {   
    console.log("Remote stream removed.");
}