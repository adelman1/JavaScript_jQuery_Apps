$(document).ready(function() {
	// create array of slide images
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;
	
	// Start slide show
	timer1 = setInterval(
		function() {
			$("#caption").fadeOut(2000);
			$("#slide").slideUp(2000,"linear",
				function() {
					if (nextSlide.next().length == 0) {
						nextSlide = $("#slides img:first-child");
					}
					else {
						nextSlide = nextSlide.next();
					}
					nextSlideSource = nextSlide.attr("src");
					nextCaption = nextSlide.attr("alt");
					$("#slide").attr("src", nextSlideSource).slideDown(2000, "linear");
					$("#caption").text(nextCaption).fadeIn(2000);
				}
			)
		}, 
	5000);
})