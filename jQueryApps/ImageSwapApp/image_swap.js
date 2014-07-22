$(document).ready(function () {
	// preload image
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	//event handler for links
	$("#image_list a").click(function(evt) {
		var imageURL = $(this).attr("href");
		$("#image").attr("src", imageURL);
		
		var caption = $(this).attr("title");
		$("#caption").text(caption);
		
		// Cancel the default action of the event
		evt.preventDefault();
	}); // end click
	// move to first thumbnail
	$("li:first-child a:first-child").focus();
}); // end ready