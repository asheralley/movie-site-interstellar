// Custom Javascript
// Asher Alley

// Hamburger Menu: sweet, sweet pure vanilla JavaScript :)

	document.addEventListener('DOMContentLoaded', function (){

		var el = document.querySelector('.hamburger');
		var visible = true;
		var bottom = document.querySelector('.layer_3');
		var mid = document.querySelector('.layer_1');
		var top = document.querySelector('.layer_2');

		el.addEventListener('click', function (){

			if (visible) {
				top.classList.remove('tp-to-burger');
				top.classList.add('tp-to-arrow');
				mid.classList.remove('md-to-burger');
				mid.classList.add('md-to-arrow');
				bottom.classList.remove('bt-to-burger');
				bottom.classList.add('bt-to-arrow');
			} else {
				top.classList.remove('tp-to-arrow');
				top.classList.add('tp-to-burger');
				mid.classList.remove('md-to-arrow');
				mid.classList.add('md-to-burger');
				bottom.classList.remove('bt-to-arrow');
				bottom.classList.add('bt-to-burger');
			}

			visible = !visible;
		});

	});

// Mobile show/hide navigation

	   $(document).ready(function() {

	        $('.hamburger').click(function () {

		    	$('.content').fadeToggle('fast', function (){
		    		// Set the effect type
		    	var effect = 'slide';

		    	// Set the options for the effect type chosen
		    	var options = 'left';

		    	// Set the duration (default: 400 milliseconds)
		    	var duration = 500;
		    		$('.nav-pane').toggle(effect, options, duration);
		    	});
		});


// Modal or lightbox hide and show

	
	$('.over-lay').addClass('accessibly-hidden');

	$('.show-trailer').click(function (){ 
		$('.over-lay').removeClass('accessibly-hidden');
		$('.light-box-trailer').removeClass('accessibly-hidden');
		//Hide the menu when lightbox is in view
		$('.nav-pane').hide();
	});

	$('.hidet').click(function (){
		$('.over-lay').addClass('accessibly-hidden');
		$('.light-box-trailer').addClass('accessibly-hidden');
		//Show the menu when lightbox is in view
		$('.nav-pane').show();
	});

	function adjustIframes(){

  		$('iframe').each(function(){
    		var
    			$this       = $(this),
    			proportion  = $this.data( 'proportion' ),
    			w           = $this.attr('width'),
    			actual_w    = $this.width();
    
    		if ( ! proportion ){

        			proportion = $this.attr('height') / w;
        				$this.data( 'proportion', proportion );
   				}
  
    		if ( actual_w != w ){

        		$this.css( 'height', Math.round( actual_w * proportion ) + 'px' );
    			}
  		});
	}
		$(window).on('resize load',adjustIframes);




// Modal code lightbox for story


		$('.over-lay-story').addClass('accessibly-hidden');

			$('.show-story').click(function (){ 
			$('.over-lay-story').removeClass('accessibly-hidden');
			$('.light-box-story').removeClass('accessibly-hidden');
			//Hide the menu when lightbox is in view
			$('.nav-pane').hide();
		});

		$('.hides').click(function (){
			$('.over-lay-story').addClass('accessibly-hidden');
			$('.light-box-story').addClass('accessibly-hidden');
			//Show the menu when lightbox is in view
			$('.nav-pane').show();
		});


// Modal code lightbox for gallery

		$('.over-lay-gallery').addClass('accessibly-hidden');

			$('.show-gallery').click(function (){ 
			$('.over-lay-gallery').removeClass('accessibly-hidden');
			$('.light-box-gallery').removeClass('accessibly-hidden');
			$('.close-gallery').removeClass('accessibly-hidden');
			//Hide the menu when lightbox is in view
			$('.nav-pane').hide();
		});

		$('.hideg').click(function (){
			$('.over-lay-gallery').addClass('accessibly-hidden');
			$('.light-box-gallery').addClass('accessibly-hidden');
			$('.close-gallery').addClass('accessibly-hidden');
			//Show the menu when lightbox is in view
			$('.nav-pane').show();
		});



// Slide up Social Media Buttons

	$( '.sm-reveal' ).click(function() {
  		$( '.footer-lower' ).slideToggle( 'fast' );
  		$('.fa-angle-double-up').toggleClass('sm-rotate');
	});

});




