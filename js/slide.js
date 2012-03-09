//////////////////////////////////////////
// Javascript file used to change slide //
//////////////////////////////////////////

/**
 * Previous slide
 * @return {void}
 */
remoteSlide = function(way) {
	$('.carousel').carousel(way);
}

/**
 * Emit to the server
 * @return {void}
 */

$(function() {
	/**
	 * Declaration of the carousel
	 * @return {void}
	 */
	var slideShow = $('.carousel');
	slideShow.carousel('pause');

	/**
	 * Event to previous and next slide
	 * @return {void}
	 */
	$('#prevSlide').on('click', function(){
		var message = JSON.stringify({'type' : 'SLIDE', 'value' : $(this).data('slide')});
		connection.send(message);
	});
	$('#nextSlide').on("click", function(){
		var message = JSON.stringify({'type' : 'SLIDE', 'value' : $(this).data('slide')});
		connection.send(message);
	});
});
