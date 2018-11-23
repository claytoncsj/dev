// Scroll suave 
$('div a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			// menuHeight = $('div').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset + 10
	}, 1000);
});

