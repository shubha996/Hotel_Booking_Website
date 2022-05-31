// var API_KEY = "70f4ec573emsh921104ddc08f3f0p1477a8jsn1b749f29c79e";  Exhausted
var API_KEY = "09f4b597e7msh9576e1eac0cb495p161e6ajsn917e25f7d037";

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

// Login Logout Function

localStorage.setItem("isLogin", "false");

document.getElementById("login-btn").setAttribute("data-bs-toggle", "modal");

// document.getElementById("modal-login").addEventListener("click", login);

function login(){
    var reftousername = document.getElementById("username-field").value;
    var reftopassword = document.getElementById("password-field").value;
    var reftologinbtn = document.getElementById("login-btn");

    if(reftousername === "admin" && reftopassword === "admin"){
        localStorage.setItem("username", reftousername);
        localStorage.setItem("password", reftopassword);
        localStorage.setItem("isLogin", "true");

        window.alert("Login Successful !");
        reftologinbtn.innerHTML = "Logout";
        document.getElementById("login-btn").removeAttribute("data-bs-toggle");
        document.getElementById("paynow-btn").disabled = false;
        document.getElementById("login-btn").addEventListener("click", logout);
    }else{
        reftousername = "";
        reftopassword = "";
        window.alert("Login Failed !");
    }
}

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.setItem("isLogin", "false");
    document.getElementById("login-btn").innerHTML = "Login";
    document.getElementById("login-btn").setAttribute("data-bs-toggle", "modal");
    document.getElementById("paynow-btn").disabled = true;
}

// API Call for Hotel image Details and address for booking
var location_id = params.get('id');

function fetchDetailsForHotel(){
    const data = null;

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var jsondata = JSON.parse(xhr.responseText).data;
            console.log(jsondata);
            populateDetails(jsondata);
        }
    }
    xhr.open("GET", "https://travel-advisor.p.rapidapi.com/hotels/get-details?checkin=2022-05-31&adults=1&lang=en_US&currency=USD&nights=2&location_id=" + location_id);
    xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", API_KEY);

    xhr.send(data);
}
fetchDetailsForHotel();

function populateDetails(jsondata){
    var reftohoteldetailsdiv = document.getElementsByClassName("hotel-details")[0];

    reftohoteldetailsdiv.innerHTML =    `<img class="hotel-image" src="${jsondata[0].photo.images.large.url}" alt="${jsondata[0].name}">
                                        <div class="discription">
                                            <h2 id="hotel-name">${jsondata[0].name}</h2>
                                            <p id="hotel-rank">${jsondata[0].ranking}</p>
                                            <p id="hotel-address">${jsondata[0].address}</p>
                                        </div>`;

}