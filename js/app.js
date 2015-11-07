/*everything is loaded on page load (inside the document ready)*/
	
	$(document).ready(function() {
	
		/*on page load —> display the default state --> show ryu-still (and hide verifying else)*/
			$('.ryu-action').hide(); //(this line means hide all 4 divs)
			/* is replacing ...
				$('.ryu-ready').hide();
				$('.ryu-throwing').hide();
				$('.ryu-cool').hide();
			*/
			$('.ryu-still').show();
		
	/*on mouse over 
			—> mouseenter—> display ryu-ready (and hide verifying else)*/
				$('.ryu').mouseenter(function() {
				    $('.ryu-action').hide(); //(this line means hide all 4 divs)
				    $('.ryu-ready').show();
				  });
		/*	—> mouseleave —> display the default state --> ryu-still (and hide verifying else)*/
				$('.ryu').mouseleave(function() {
				    $('.ryu-action').hide(); //(this line means hide all 4 divs)
				    $('.ryu-still').show();
				  });
		
	/*on click 
			—> mousedown —> display ryu-throwing (and hide verifying else)*/
				$('.ryu').mousedown(function() {
				    $('.ryu-action').hide();  //(this line means hide all 4 divs) 
				    $('.ryu-throwing').show();
				  });
			
		/*	—> mouseup —> display the default state --> ryu-still (and hide verifying else)*/
				$('.ryu').mouseup(function() {
				    $('.ryu-action').hide(); //(this line means hide all 4 divs)
				    $('.ryu-still').show();
				  });
		
		
	/*on key press 
			—> keydown —> display ryu-cool (and hide verifying else)*/
				$(document).keydown(function(key) {
				    if (key.keyCode == 88) {
				      $('.ryu-action').hide(); //(this line means hide all 4 divs)
				      $('.ryu-cool').show();
				    }   
				  });
		
		/*	—> keyup —> display the default state --> ryu-still (and hide verifying else)*/
				$(document).keyup(function(key) {
				    if (key.keyCode == 88) {
				      $('.ryu-action').hide(); //(this line means hide all 4 divs)
				      $('.ryu-still').show();
				    }
				  });
		
		
	//close document ready	
	});
	



/*how to play a sound */
	$('#sound-id')[0].volume = 0.5; //set the volume (0 => 0% and 1 => 100%; so 0.5 is 50%)
	$('#sound-id')[0].load(); //load the sound into the memory
	$('#sound-id')[0].play(); //play it
	$('#sound-id')[0].pause(); //pause a sound


