$(document).ready(function() {

	$('.toggle-menu').click(function(evt){
		
		$(this).toggleClass('active');
		$('#prime-nav').toggle();
		
		evt.preventDefault();
		
	});

});