$(document).ready(function() {
	$("#slides img").slice(1).hide();
	var slideIndex =0, topIndex =$("#slides img").length - 1;
	setInterval( function() {
		$("#slides img").eq(slideIndex).fadeOut(1000,"linear");
			if (slideIndex < topIndex) {
				$("#slides img").eq(slideIndex).next().fadeIn(1000, "linear");
				slideIndex++
			}
			else {
				$("#slides img").eq(0).fadeIn(1000, "linear");
				slideIndex = 0;
			}
	}, 3000);
})