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

	//add functionality to the rollover work section
	
	//declare project variable
	var $proj = $('#workSlider > article');;
	// count how many articles
	var $projTotal = $('#workSlider article').length;
	console.log();

	//create mouse over handler for each article
	var mouseoverHandler = function (e) {
		var highlightSize = 30;
		var otherSize = (100 - highlightSize) / ($projTotal - 1);

		console.log('big = ' + highlightSize);
		console.log('small = ' + otherSize);

		//on highlighted article, increase width to highlightSize;
		$(this).css('width', highlightSize + '%')
		//others fade out and reduce in size
		$proj.not(this)
			 .css('width', otherSize + '%')
			 .css('opacity', '0.2');
	};

	//revert on mouse out
	var mouseoutHandler = function (e) {
		var returnSize = (100 / $projTotal);
		$proj.css('width', returnSize + '%')
			 .css('opacity', '1')
	};

	// perform mouseover fucntion
	$proj.mouseover(mouseoverHandler);
	$proj.mouseleave(mouseoutHandler)

});