$(document).ready(function() {
	$("#faqs h1").animate({ 
		fontSize: "500%",
		opacity: 1,
		left: "+=275", 
		backgroundColor: "blue",
		color: "red"}, 2000 )  
		.animate({ 
			fontSize: "175%",
			left: "-=275",
			backgroundColor: "white",
			color: "blue"}, 1000 );
	
	// runs when an h2 heading is clicked
	$("#faqs h2").toggle(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().show("slide", 500);
	    },
	    function() {
	        $(this).toggleClass("minus");
	        $(this).next().hide("slide", 1500);
	    }
    ); // end toggle
}); // end ready
