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

var url = window.location.search;
var searchURL = new URLSearchParams(url);
var id = searchURL.get("id");

function fetchHotelDetails(){
    const data = null;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === xhr.DONE) {
            var jsondata = JSON.parse(xhr.responseText).data;
            console.log(jsondata);
            jsondata.forEach(element => {
                var amenities = element.amenities;
                amenities.slice(0, 10).forEach(item => {
                    var amenitiesdata = `<li>${item.name}</li>`;
                    var reftoul = document.getElementById("amenities-list");
                    reftoul = reftoul + amenitiesdata;
                })
                var newDetails =    `<h2>${element.name}</h2>
                                    <h5>RATING</h5>
                                    <p>
                                        <span class="fa fa-star checked"></span>
                                        <span>${element.rating}</span>
                                    </p>
                                    <h5>AMENITIES</h5>
                                    <ul id="amenities-list">
                                        <li></li>
                                    </ul>
                                    <h5>DESCRIPTION</h5>
                                    <p>${element.descripition}</p>`;
                document.getElementsByClassName("hotel-description-div")[0].innerHTML = 
                document.getElementsByClassName("hotel-description-div")[0].innerHTML + newDetails;
            });
        }
    });

    xhr.open("GET", "https://travel-advisor.p.rapidapi.com/hotels/get-details?checkin=2022-05-30&adults=1&lang=en_US&currency=USD&nights=2&location_id=" + id);
    xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "70f4ec573emsh921104ddc08f3f0p1477a8jsn1b749f29c79e");

    xhr.send(data);
}
fetchHotelDetails();


function fetchHotelPhotos(){

const data = null;

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
    var isActive = "active";
	if (xhr.readyState === xhr.DONE) {
        var jsondata = JSON.parse(xhr.responseText).data;
        jsondata.forEach(element => {
            var newPhotos =     `<div class="carousel-item ${isActive}">
                                    <img class="hotel-image" src="${element.images.large.url}" class="d-block w-100" alt="...">
                                </div>`;
            isActive = "";
            document.getElementById("middle").innerHTML = document.getElementById("middle").innerHTML + newPhotos;
        });
	}
});

xhr.open("GET", "https://travel-advisor.p.rapidapi.com/photos/list?currency=USD&limit=50&lang=en_US&location_id=" + id);
xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "70f4ec573emsh921104ddc08f3f0p1477a8jsn1b749f29c79e");

xhr.send(data);
}
fetchHotelPhotos();

