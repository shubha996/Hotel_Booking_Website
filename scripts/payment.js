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

document.getElementById("modal-login").addEventListener("click", login);

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
