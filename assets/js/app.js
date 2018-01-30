//calculate inputs to determine charge amount
function calculate() {
	var hours = parseInt(document.getElementById("hours-input").value, 10);
	var rate = parseInt(document.getElementById("rate-input").value, 10);
	var supplies = parseInt(document.getElementById("cost-input"). value, 10);
	var total = hours * rate + supplies;
		document.getElementById("charge").innerHTML = total;
};

//calculate on click
$("#total").on("click", function() {
	calculate();
	reset();
});	

//reset input fields
function reset() {
	document.getElementById("hours-input").value = "";
	document.getElementById("rate-input").value = "";
	document.getElementById("cost-input").value = "";
};