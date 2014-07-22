$(document).ready(function() {
	$("#faqs h2").toggle(
		function() {
			$(this).toggleClass("minus");
			$(this).next().show();
		},
		function() {
			$(this).toggleClass("minus");
			$(this).next().hide();
		}
	); // end toggle
}); // end ready