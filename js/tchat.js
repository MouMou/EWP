// On creer l'evenement recupererMessages pour recuperer direcement les messages sur serveur
recupererMessages = function (messages) {
		
	// messages est le tableau contenant tous les messages qui ont ete ecris sur le serveur
	var html = '';
	for (var i = 0; i < messages.length; i++)
		html += '<div class="line"><b>'+messages[i].nickname+'</b> : '+messages[i].message+'</div>';
	$('#tchat').html(html);
}
	
// Si quelqu'un a poste un message, le serveur nous envoie son message avec l'evenement recupererNouveauMessage
recupererNouveauMessage = function (message) {
	var html = $('#tchat').html();
	html += '<div class="line"><b>'+message.nickname+'</b> : '+message.message+'</div>';
	$('#tchat').html(html);
}
	
// Quand on veut envoyer un message (quand il a valider le formulaire)
$(function() {
	$('#send').on("click", function () {
		mess = $('#mess');
		// On recupere le message
		var message = $('#mess').val();
		
		//console.log({ 'nickname' : nickname.val(), 'message' : message });
		// On appelle l'evenement se trouvant sur le serveur pour qu'il enregistre le message et qu'il l'envoie a tous les autres clients connectes (sauf nous)
		socket.emit('nouveauMessage', { 'nickname' : $('#username').text(), 'message' : message });
		
		// On affiche directement notre message dans notre page
		var html = $('#tchat').html();
		html += '<div class="line"><b>'+$('#username').text()+'</b> : '+message+'</div>';
		$('#tchat').html(html);
		// On vide le formulaire
		$('#mess').val('');
		
		// On retourne false pour pas que le formulaire n'actualise pas la page
		return false;
	});
});
