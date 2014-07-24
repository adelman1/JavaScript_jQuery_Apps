$(document).ready(function() {
	$("#slides img").slice(1).hide();
	setInterval(function() {
		$("#slides img").first().fadeOut(1000)
		.next().fadeIn(1000)
		.end()
		.appendTo("#slides");
	}, 3000);
})