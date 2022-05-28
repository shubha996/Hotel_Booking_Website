// Disabling Previous days from today on Date Picker

var dateStringObject = new Date();

var currentDate = dateStringObject.getDate();
if(currentMonth < 10){
    currentDate = '0' + currentDate;
}

var currentMonth = dateStringObject.getMonth();
if(currentMonth < 10){
    currentMonth++;
    currentMonth = '0' + currentMonth;
}

var currentYear = dateStringObject.getFullYear();

var todaysDate = currentYear + '-' + currentMonth + '-' + currentDate;

document.getElementById("fromDate").setAttribute("min", todaysDate);




// Price Calculation

function priceCalculation (){
    var perDayCharge = 1000;
    
    var numOfAdults = document.getElementById("adults").value;

    var date1 = new Date(document.getElementById("fromDate").value);
    document.getElementById("toDate").setAttribute("min", document.getElementById("fromDate").value);
    var date2 = new Date(document.getElementById("toDate").value);
    var difference = date2.getTime() - date1.getTime();
    if(date2.getTime() == date1.getTime()){
        numOfDays = 1;
    }
    else{
        var numOfDays = difference / (24 * 60 * 60 * 1000);
    }
    
    var total = perDayCharge * numOfAdults * numOfDays;

    document.getElementById("totalAmount").value = "Rs. " + total;
}

