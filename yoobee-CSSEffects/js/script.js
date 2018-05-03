$(document).ready(function(){
	$(".box").click(function(){
		$(this).toggleClass("rotate360");
	});

	$(".flexColumn").click(function(){
		$(".flexColumn").removeClass("grow");
		$(this).addClass("grow");
	});

	$("#hamburger").click(function(){
		$("#topBun").toggleClass("makeXTop");
		$("#ham").toggleClass("hide");
		$("#bottomBun").toggleClass("makeXBottom");
	});
});
