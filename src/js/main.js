$(document).ready(function() {

	$('#site-head .toggle-menu').click(function(evt){
		
		$(this).toggleClass('active');
		$('#prime-nav').toggle();
		
		evt.preventDefault();
		
	});
	
	$('.toggle-submenu').click(function(evt){
		
		$(this).toggleClass('active');
		$('#sec-nav').toggle();
		
		evt.preventDefault();
		
	});


	$('#sec-nav a').click(function(evt){
		var scroll = $(document).scrollTop();
		$('.toggle-submenu span').text($(evt.target).text());
		$('.section-block').removeClass('active-section');
		$($(evt.target).attr('href')).addClass('active-section');
		$('#sec-nav').toggle();
		$('#sec-nav li').removeClass('current-item');
		$(evt.target).parent().addClass('current-item');
		evt.preventDefault();
		window.location.hash = $(evt.target).attr('href');
		$(document).scrollTop(scroll);
	});

	if($(window.location.hash).length > 0) {
		$('.toggle-submenu span').text($('#sec-nav a[href="'+window.location.hash+'"]').text());
		$('.mod').removeClass('active-section');
		$(window.location.hash).addClass('active-section');
		$('#sec-nav li').removeClass('current-item');
		$('#sec-nav a[href="'+window.location.hash+'"]').parent().addClass('current-item');
	}

	$(window).resize(function() {

		if(parseInt($('#brand-logo').css('font-size')) === 0 && $('#prime-nav').css('display') != 'block') {
			$('#prime-nav').toggle();
		}

		if(parseInt($('#brand-logo').css('font-size')) !== 0 && $('#prime-nav').css('display') == 'block') {
			$('#prime-nav').toggle();
			$('#site-head .toggle-menu').removeClass('active');
		}

	});

});