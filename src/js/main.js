$(document).ready(function() {

	$('#site-head .toggle-menu').click(function(evt){
		
		$(this).toggleClass('active');
		$('#prime-nav').toggle();
		
		evt.preventDefault();
		
	});


	$(window).resize(function() {

		if($('#brand-logo').css('background-color') == 'rgb(255, 255, 255)' && $('#prime-nav').css('display') != 'block') {
			$('#prime-nav').toggle();
		}

		if($('#brand-logo').css('background-color') != 'rgb(255, 255, 255)' && $('#prime-nav').css('display') == 'block') {
			$('#prime-nav').toggle();
			$('#site-head .toggle-menu').removeClass('active');
		}

	});

});