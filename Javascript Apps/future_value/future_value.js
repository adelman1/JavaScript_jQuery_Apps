var $ = function (id) {
    return document.getElementById(id);
}
var calculateClick = function() {
	var investment = parseFloat($("investment").value);
	var rate = parseFloat($("rate").value);
	var years = parseInt($("years").value);
	if ( isNaN(investment)) {
		alert("Investment amount must be numeric.");
	} else if ( investment <= 0) {
		alert("Investment amount must be greater than zero.");
	} else if ( isNaN(rate)) {
		alert("Annual Interest Rate must be numeric.");
	} else if ( rate <= 0) {
		alert("Annual Interest Rate must be greater than zero.");
	} else if ( isNaN(years)) {
		alert("Number of Years must be numeric.");
	} else if ( years <= 0) {
		alert("Number of Years must be greater than zero.");
	} else {
		var futureValue = investment;
		for (i = 1; i <= years; i++) {
			futureValue += futureValue * rate / 100;
		}
		$("future_value").value = futureValue.toFixed(2);
	}
}
window.onload = function () {
	$("calculate").onclick = calculateClick;
	$("investment").focus();
}