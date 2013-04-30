$(document).ready(function() {

	$('#site-head .toggle-menu').click(function(evt){
		
		$(this).toggleClass('active');
		$('#prime-nav').toggle();
		
		evt.preventDefault();
		
	});

});