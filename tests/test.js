$.fn.test = function(){
	// Hide title on iframes
	// if (window.self !== window.top) {
	// 	$('h1').hide();
	// }

	$.scrollTo.defaults.axis = 'xy';
	


	return this.scrollTo('max', 1000).scrollTo(0, 1000);
};
