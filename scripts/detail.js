var refToNoOfAdults = document.getElementById("adults");
var refToTotal = document.getElementById("total");

var days = new Date();
console.log(days);
var numberofdays = 4; 
var calculation = refToNoOfAdults.value * 1000 * numberofdays;
console.log(calculation);
refToTotal.value = calculation;