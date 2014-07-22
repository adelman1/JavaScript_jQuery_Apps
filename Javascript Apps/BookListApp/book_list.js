var $ = function (id) {
	return document.getElementById(id);
}
window.onload = function () {
	var categories = $("categories");
	var h2Elements = categories.getElementsByTagName("h2");
	
	var h2Node;
	for (var i = 0; i , h2Elements.length; i++ ) {
		h2Node = h2Elements[i];
		
		h2Node.onclick = function () {
			var h2 = this;	//This is the current h2Node object
			
			if (h2.getAttribute("class") == "plus") {
				h2.setAttribute("class", "minus");
			}
			else {
				h2.setAttribute("class", "plus");
			}
			if (h2.nextElementSibling.getAttribute("class") == "closed") {
				h2.nextElementSibling.setAttribute("class", "open");
			}
			else {
				h2.nextElementSibling.setAttribute("class", "closed");
			}
			
			$("image").setAttribute("src", "");
			// needed for IE so a placeholder isn't displayed for the image
			$("image").setAttribute("style", "display:none;");
		}
	}
	var listNode = $("categories");
	var imageNode = $("image");
	
	var imageLinks = listNode.getElementsByTagName("a");
	
	var i, linkNode, image;
	for ( i = 0; i < imageLinks.length; i++ ) {
		linkNode = imageLinks[i];
		
		linkNode.onclick = function (evt) {
			var link = this;
			imageNode.src = link.getAttribute("href");
			// needed for IE to display the image
            imageNode.setAttribute("style", "display:block;");
			
			// Cancel the default action of the event
			if(!evt) evt = window.event;
			if ( evt.preventDefault ) {
				evt.preventDefault();
			}
			else {
				evt.returnValue = false;
			}
		}
			// Preload image
			image = new Image();
			image.src = linkNode.getAttribute("href");
	}
}