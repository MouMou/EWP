//////////////////////////////////////////
// Javascript file used to change slide //
//////////////////////////////////////////

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
	$('#prevSlide').on('click', prevSlide);
	$('#nextSlide').on("click", nextSlide);
});

/**
 * Previous slide
 * @return {void}
 */
remotePrev = function() {
	$('.carousel').carousel('prev');
}

/**
 * Emit to the server
 * @return {void}
 */
prevSlide = function() {
	socket.emit('prevSlide');
}

/**
 * Next slide
 * @return {void}
 */
remoteNext = function() {
	$('.carousel').carousel('next');
}

/**
 * Emit to the server
 * @return {void}
 */
nextSlide = function() {
	socket.emit('nextSlide');
}