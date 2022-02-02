// Scroll Up

$('a.volver-arriba').on('click', function (event) {
    event.preventDefault();

    if ($(window).scrollTop() != 0) {
        $('html, body').stop().animate({scrollTop: 0}, 800);
    }

});


// Scroll Suave

$(document).ready(function (argument) {
	$('a.scroll-suave').on('click', function (event) {
    	event.preventDefault();
    	var seccionOffsetTop = $($(this).attr('href')).offset().top - 20;
    	$('html, body').stop().animate({scrollTop: seccionOffsetTop}, 900,function() {
            $("#Menu-movil").slideUp(1000);
        });
	});
});