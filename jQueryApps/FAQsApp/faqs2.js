$(document).ready(function() {
	$("#faqs h2").click(
		function() {
			$(this).toggleClass("minus");
			$(this).next().slideToggle(1000);
		}
	); // end toggle
}); // end ready