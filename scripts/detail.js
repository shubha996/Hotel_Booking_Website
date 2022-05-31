// var API_KEY = "70f4ec573emsh921104ddc08f3f0p1477a8jsn1b749f29c79e";  Exhausted
var API_KEY = "09f4b597e7msh9576e1eac0cb495p161e6ajsn917e25f7d037";

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

// API call for fetching hotel details
var url = window.location.search;
var searchURL = new URLSearchParams(url);
var id = searchURL.get("id");
document.getElementById('id').value = id;
console.log(id);

function fetchHotelDetails(){
    const data = null;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === xhr.DONE) {
            var jsondata = JSON.parse(xhr.responseText).data;
            renderHotelDetails(jsondata);
        }
    });

    xhr.open("GET", "https://travel-advisor.p.rapidapi.com/hotels/get-details?checkin=2022-05-31&adults=1&lang=en_US&currency=USD&nights=2&location_id=" + id);
    xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "09f4b597e7msh9576e1eac0cb495p161e6ajsn917e25f7d037");

xhr.send(data);
}
fetchHotelDetails();

// Rendering Hotel Details
function renderHotelDetails(jsondata){
    var name = jsondata[0].name;
    document.getElementById("hotelName").innerHTML = name;

    var description = jsondata[0].description;
    document.getElementById("description").innerHTML = description;

    var rating = jsondata[0].rating;
    document.getElementById("ratings").innerHTML = document.getElementById("ratings").innerHTML + `<span>${rating}</span>`
    
    var amenities = jsondata[0].amenities;
    var amenitiesArray = [];
    if(amenities.length > 10){
        amenities.slice(0, 10).forEach(data => {
            amenitiesArray.push(data);
        })
    }else{
        amenities.forEach(data => {
            amenitiesArray.push(data);
        })
    }
    amenitiesArray.forEach(data => {
        var newli = `<li>${data.name}</li>`;
        document.getElementById("amenitiesList").innerHTML = document.getElementById("amenitiesList").innerHTML + newli;
    })
}

// API call for fetching Hotel Images and rendering the same
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
xhr.setRequestHeader("X-RapidAPI-Key", API_KEY);

xhr.send(data);
}
fetchHotelPhotos();

