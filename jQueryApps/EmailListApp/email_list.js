$(document).ready(function() {
	$("#join_list").click(function () {
		var emailAddress1 = $("#email_address1").val();
		var emailAddress2 = $("#email_address2").val();
		var isValid = true;
	
		if (emailAddress1 == "") {
			$("#email_address1").next().text("This field is required.");
			isValid = false;
		} else { 
			$("#email_address1").next().text(""); 
		}
		
		if (emailAddress2 == "") {
			$("#email_address2").next().text("This field is required.");
			isValid = false;
		} else if (emailAddress1 !== emailAddress2) {
			$("#email_address2").next().text("This entry must equal the first entry.");
			isValid = false;
		} else { 
			$("#email_address2").next().text(""); 
		}
		
		if ($("#first_name").val() == "") {
			$("#first_name").next().text("This field is required.");
			isValid = false;
		} else { 
			$("#first_name").next().text(""); 
		}
		
		if (isValid) {
			//submit the form if all of the fields are valid
			$("#email_form").submit(); 
		}
	}); // end click
	$("#email_address1").focus();
}); // end ready