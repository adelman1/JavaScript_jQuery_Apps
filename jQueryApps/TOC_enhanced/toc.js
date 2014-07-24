$(document).ready(function() {
	// add h2 heading to the aside
	$("aside").append("<h2>Table of contents</h2>");
	
	// wrap each h2 text in <a> tag
	$("article h2").wrapInner("<a></a>");
	
	// add ids to the <a> tags
	$("article a").each(function(index) {
		var id = "heading" + (index + 1);
		$(this).attr("id", id);
	});
	
	// clone the <a> tags in the article and insert them into the aside
	$("article a").clone().insertAfter($("aside h2"));
	
	// remove the id attributes from the <a> tags
	$("aside a").removeAttr("id");
	
	// add the href attribute to each <a> tag
	$("aside a").attr("href", function(index) {
		var href = "#heading" + (index + 1);
		return href;
	});
	
	// wrap <a> tag around h1 text
	$("h1").wrapInner("<a id='top'></a>");
	
	// insert "back to top" <a> tags after each topic
	$("article h2").before("<a href='#top'>Back to top</a>");
	$("article a:first").remove();
	$("article p:last").after("<a href='#top'>Back to top</a>");
	
	// change the CSS for the selected topic and move the TOC
	$("aside a").click(function() {
		// derive the id os the selected h2 element from the <a> tag
		id = $(this).attr("href");	// get value of the href attribute in <a> tag
		
		// change the styles for the selected heading
		$(id).css({ "color": "blue", "font-size": "150%" });
		
		// move the aside so it is next to the selected heading
		var h2Offset = $(id).offset().top;
		var asideHeight = $("aside").height();
		var articleHeight = $("article").height();
		if ( (h2Offset + asideHeight) <= articleHeight) {
			asideOffset = h2Offset;
		} else {
			asideOffset = articleHeight - asideHeight;
		}
		$("aside").css("top", asideOffset);
	});
})