"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp - 32) * 5 / 9;
const calculateFahrenheit = temp => temp * 9 / 5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
	$("#degrees_computed").value = "";
	$("#degree_label_1").textContent = label1Text;
	$("#degree_label_2").textContent = label2Text;
}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {
	// Retrieve the entered temperature
	const temp = parseFloat($("#degrees_entered").value);

	// Data validation to check if the input is a valid number
	if (isNaN(temp)) {
		$("#message").textContent = "You must enter a valid number for degrees.";
		$("#degrees_computed").value = "";
		return;
	} else {
		$("#message").textContent = "";
	}

	// Perform conversion based on selected conversion type
	let result;
	if ($("#to_celsius").checked) {
		result = calculateCelsius(temp);
	} else {
		result = calculateFahrenheit(temp);
	}

	// Display the result rounded
	$("#degrees_computed").value = Math.round(result);

	// Focus the input again
	$("#degrees_entered").focus();
};

// Declare the functions that switch the display
const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
	$("#to_celsius").addEventListener("click", toCelsius);
	$("#to_fahrenheit").addEventListener("click", toFahrenheit);

	// Clear the message when the user starts typing
	$("#degrees_entered").addEventListener("input", () => {
		if ($("#degrees_entered").value.length > 0) {
			$("#message").textContent = "";
			$("#degrees_computed").value = "";
		}
	});

	// move focus
	$("#degrees_entered").focus();
});
