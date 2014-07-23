$(document).ready(function() {
	$("#categories h2").click(
		function() {
			$(this).toggleClass("minus");
			$(this).next().slideToggle(1000);
			$("#image").attr("src", "");
			$("#image").attr("style", "display:none;");
		}
	); // end toggle
	// preload image
	$("#web_images a, #java_images a, #net_images a").each(function() {
		// get old and new urls
		var imageURL = $(this).attr("href");
		var bookImage = new Image();
		bookImage.src = $(this).attr("href");
		
	}); // end each
	
	//event handler for links
	$("#categories a").click(function(evt) {
		var imageURL = $(this).attr("href");
		$("#image").attr("src", imageURL);
		$("#image").attr("style", "style:block;");
		
		var caption = $(this).attr("title");
		$("#caption").text(caption);
		
		// Cancel the default action of the event
		evt.preventDefault();
	}); // end click
}); // end ready