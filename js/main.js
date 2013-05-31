// //JS Document

$(document).ready(function() {

	//MOBILE MENU
	$('#menuToggle').click(function() {
		//menu button reveals up and down
		$('#mainNav').slideToggle('fast');
		$('#menuToggle').toggleClass('close')
	});

});