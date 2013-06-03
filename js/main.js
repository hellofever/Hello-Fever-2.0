// //JS Document

$(document).ready(function() {

	//MOBILE MENU
	$('#menuToggle').click(function() {
		//menu button reveals up and down
		$('#mainNav').slideToggle('fast');
		//add styling with class style close
		$('#menuToggle').toggleClass('close')
	});
	//End mobile menu
	
});