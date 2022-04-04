//Ajuste automatico del contenedor de slider


var h = $("#slider label").height() + 30;
$("#slider").height(h);

$(".btn-faq").on('click',function() {
	$($(this).attr("id-FAQ")).slideToggle(1000);
});


//