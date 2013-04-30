$(document).ready(function() {

	$('#site-head .toggle-menu').click(function(evt){
		
		$(this).toggleClass('active');
		$('#prime-nav').toggle();
		
		evt.preventDefault();
		
	});


	$(window).resize(function() {

		if($('#brand-logo').css('background-color') == '#fff') {
			$('#prime-nav').css('display','block');
		}


	});

});