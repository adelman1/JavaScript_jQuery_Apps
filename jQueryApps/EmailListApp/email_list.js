$(document).ready(function() {
	
// var stateCodeLookup = function(stateCode) {
	// var states	= ["CA", "WA", "OR", "NV", "NM", "AZ", "WY", "MT"];
	// states.push("NY");
	// stateCode = stateCode.toUpperCase();
	// for ( var i in states) {
		// if ( states[i] == stateCode) {
			// return true;
		// }
	// }
	// return false;
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
		
		if ($("#first_name").value == "") {
			$("#first_name").next().text("This field is required.");
			isValid = false;
		} else { 
			$("#first_name").next().text(""); 
		}

		// var stateCode = $("state_code").val();
		// if(!stateCodeLookup(stateCode)) {
			// $("state_code").next().text("State code is invalid.");
			// inValid = false;
		// }
		// else {
			// $("state_code").next().text("");
		// }
		
		if (isValid) {
			//submit the form if all of the fields are valid
			$("#email_form").submit(); 
		}
	}); // end click
	$("#email_address1").focus();
}); // end ready