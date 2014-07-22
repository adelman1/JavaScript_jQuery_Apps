$(document).ready(function() {
	$("#faqs h2").toggle(
		function() {
			$(this).toggleClass("minus");
			$(this).next().slideDown(1000);
		},
		function() {
			$(this).toggleClass("minus");
			$(this).next().fadeOut(1000);
		}
	); // end toggle
}); // end ready