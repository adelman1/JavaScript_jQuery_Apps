var $ = function (id) {
	return document.getElementById(id);
}
var stateCodeLookup = function(stateCode) {
	var states	= ["CA", "WA", "OR", "NV", "NM", "AZ", "WY", "MT"];
	states.push("NY");
	stateCode = stateCode.toUpperCase();
	for ( var i in states) {
		if ( states[i] == stateCode) {
			return true;
		}
	}
	return false;
}
var joinList = function () {
	var emailAddress1 = $("email_address1").value;
	var emailAddress2 = $("email_address2").value;
	var isValid = true;
	
	if (emailAddress1 == "") {
		$("email_address1_error").firstChild.nodeValue =
			"This field is required.";
		isValid = false;
	} else { $("email_address1_error").firstChild.nodeValue = ""; }
	
	if (emailAddress1 !== emailAddress2) {
		$("email_address2_error").firstChild.nodeValue = 
			"This entry must equal first entry.";
		isValid = false;
	} else { $("email_address2_error").firstChild.nodeValue = ""; }
	
	if ($("first_name").value == "") {
		$("first_name_error").firstChild.nodeValue =
			"This field is required.";
		isValid = false;
	} else { $("first_name_error").firstChild.nodeValue = ""; }

	var stateCode = $("state_code").value;
	if(!stateCodeLookup(stateCode)) {
		$("state_code_error").firstChild.nodeValue = 
			"State code is invalid.";
		inValid = false;
	}
	else {
		$("state_code_error").firstChild.nodeValue = "";
	}
	
	if (isValid) {
		//submit the form if all of the fields are valid
		$("email_form").submit(); 
	}
}
window.onload = function () {
	$("join_list").onclick = joinList;
	$("email_address1").focus();
}