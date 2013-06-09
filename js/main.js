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
	
	//declare project variable and count how many articles
	var $proj = $('#workSlider > article');
	var $projTotal = $('#workSlider article').length;
	var $projWidth = 0;
	var $projImg = 0;
	
	//create mouse over handler for each article
	var mouseoverHandler = function (e) {
		//adjust size of highlight here
		var highlightSize = 30;
		//divide the rest of the sizes here
		var otherSize = (100 - highlightSize) / ($projTotal - 1);

		//on highlighted article, increase width to highlightSize;
		$(this).css('width', highlightSize + '%')
		//$('img',this).addClass('move')
		
		//Toggle off class
		$proj.not(this).css('width', otherSize + '%')
			 .addClass('off');

		//add mouse tracking functinality 
		$proj.mousemove(trackPosition);
	};

	//track mouse position
	var trackPosition = function (e) {
		//set the offset of current element
		var parentOffset = $(this).offset();
		//X/Y pos is mouse position - offset
		var relX = e.pageX - parentOffset.left;
   		var relY = e.pageY - parentOffset.top;

   		console.log('relX = ' + relX);

   		//divide image width by element width
   		$projWidth = $(this).css('width');
   		$projImg = $('img', this).css('width');

		//change imgpos left to match offset
		moveImage = ((parseInt($projImg) / parseInt($projWidth)) * relX * -1)*0.4;
		console.log('moveImage = ' + moveImage)

		$('img', this).css('left', moveImage);


   		// //var mouseUnit = parseInt($projWidth / $projImg);
   		// console.log('mouseUnit = ' + parseInt($projImg));
	};

	//revert on mouse out
	var mouseoutHandler = function (e) {
		//get original size
		var returnSize = (100 / $projTotal);
		//remove class and return to the size
		$proj.css('width', returnSize + '%')
			 .removeClass('off');

		$('img', this).css('left', '0');

		//remove class to move image back
		//$('img',this).removeClass('move')
	};

	// perform mouseover fucntion
	$proj.mouseover(mouseoverHandler);
	$proj.mouseleave(mouseoutHandler)

});