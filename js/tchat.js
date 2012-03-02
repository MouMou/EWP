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
	for (var i = 0; i < messages.length; i++) {
		html += '<div class="line"><b>'+messages[i].nickname+'</b> : '+messages[i].message+'</div>';
		taille += 18;
	}
	$('#tchat').html(html);
	$("#tchat").scrollTop(10000);
}

/**
 * If somebody send a new message, the server send message 
 * @param {array} messages : array containing all messages that were written on the server
 * @return {void}
 */	
recupererNouveauMessage = function (message) {
	var html = $('#tchat').html();
	html += '<div class="line"><b>'+message.nickname+'</b> : '+message.message+'</div>';
	$('#tchat').html(html);
	$("#tchat").scrollTop(10000);
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
		mess = $('#mess');
		var message = $('#mess').val();
		
		socket.emit('nouveauMessage', { 'nickname' : $('#username').text(), 'message' : message });
		
		var html = $('#tchat').html();
		html += '<div class="line"><b>'+$('#username').text()+'</b> : '+message+'</div>';
		$('#tchat').html(html);
		$('#mess').val('');
		$("#tchat").scrollTop(10000);
		
		return false;
	});
});
