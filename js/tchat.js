/////////////////////////////////////////
// Javascript file used to make a chat //
/////////////////////////////////////////

/**
 * Retrieve messages directly on server
 * @param {array} messages : array containing all messages that were written on the server
 * @return {void}
 */
recupererMessages = function (messages) {
	var html = '';
	var tchat = $('#tchat');
	for (var i = 0; i < messages.length; i++) {
		html += '<div class="line"><b>'+messages[i].nickname+'</b> : '+messages[i].message+'</div>';
		taille += 18;
	}
	tchat.html(html);
	setHeight(tchat);
}

/**
 * If somebody send a new message, the server send message 
 * @param {array} messages : array containing all messages that were written on the server
 * @return {void}
 */	
recupererNouveauMessage = function (message) {
	var tchat = $('#tchat');
	var html = tchat.html();
	html += '<div class="line"><b>'+message.nickname+'</b> : '+message.message+'</div>';
	tchat.html(html);
	setHeight(tchat);
}

/**
 * Calculate the height of the line's chat
 * @param {object} elt : $('#tchat')
 * @return {void}
 */	
setHeight = function(elt) {
	var height = elt.children().length * elt.children().first().height();
	elt.scrollTop(height);
}
	
/**
 * When we want to send a message 
 * Retrieve message, call the event to save the message and brodcast it to the other users
 * Display the message into your web page
 * Clean the input
 * @return {false} to not not refresh the page
 */	
$(function() {
	$('#send').on("click", function () {
		var mess = $('#mess');
		var message = $('#mess').val();
		var tchat = $('#tchat'); 
		
		var messageSocket = JSON.stringify({'type' : 'NEWMESSAGE', 'value' : { 'nickname' : $('#username').text(), 'message' : message }});

		connection.send(messageSocket);
		
		var html = tchat.html();
		html += '<div class="line"><b>'+$('#username').text()+'</b> : '+message+'</div>';
		tchat.html(html);
		mess.val('');
		setHeight(tchat);
		
		return false;
	});
});
