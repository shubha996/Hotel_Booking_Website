var params = new URL(document.location).searchParams;

document.getElementById("numdisplay").innerHTML = params.get('number-of-adults');
document.getElementById("namedisplay").innerHTML = params.get('Name');
document.getElementById("checkindisplay").innerHTML = params.get('from-date');
document.getElementById("checkoutdisplay").innerHTML = params.get('to-date');
document.getElementById("totalamt").innerHTML = params.get('total-amount');
document.getElementById("tnumdisplay").innerHTML = params.get('number-of-adults');


var todate = new Date(params.get('to-date')).getDate();
var fromdate = new Date(params.get('from-date')).getDate();

var noOfDays = (todate - fromdate);
document.getElementById("numofdays").innerHTML = noOfDays;

// PayNow Button Functionality

document.getElementById("paynow-btn").addEventListener("click", () => {
    window.alert("Hi Your Booking is Successfull !");
})
