$(document).ready(function() {

	$('#site-head .toggle-menu').click(function(evt){
		
		$(this).toggleClass('active');
		$('#prime-nav').toggle();
		
		evt.preventDefault();
		
	});


	$(window).resize(function() {

		if(parseInt($('#brand-logo').css('font-size')) == 0 && $('#prime-nav').css('display') != 'block') {
			$('#prime-nav').toggle();
		}

		if(parseInt($('#brand-logo').css('font-size')) != 0 && $('#prime-nav').css('display') == 'block') {
			$('#prime-nav').toggle();
			$('#site-head .toggle-menu').removeClass('active');
		}

	});

});