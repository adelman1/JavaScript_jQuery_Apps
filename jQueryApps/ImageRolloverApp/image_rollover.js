$(document).ready(function () {
	$("#image_rollovers img").each(function() {
		var oldURL = $(this).attr("src");
		var newURL = $(this).attr("id");
		
		// preload image
		$("#image_list a").each(function() {
			var rolloverImage = new Image();
			rolloverImage.src = newURL;
		});
		
		//event handler
		// $(this).hover(
			// function() {
				// $(this).attr("src", newURL);
			// },
			// function() {
				// $(this).attr("src", oldURL);
			// }
		// ); // end hover
		$(this).mouseover(
			function() {
				$(this).attr("src", newURL);
			}
		);
		$(this).mouseout(
			function() {
				$(this).attr("src", oldURL);
			}
		);
	}); // end each
}); // end ready