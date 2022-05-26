var btn = 'button',
session =(localStorage.getItem("username") != null) ? true : false;
// Header Template
var header =    `<div class="header-div">
                    <div id="logo-div">
                        <a href="index.html">
                            <img id="header-logo" src="./assests/images/logo.png" alt="logo">
                        </a>
                    </div>
                    <div id="login-div">
                        <div class="head-btn"></div>
                    </div>
                </div>`;
document.getElementById("header").innerHTML = header;

// Footer Template
var footer =    `<div class="footer">
                    <div class="contactus">
                        <button type="button" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal1">Contact Us</button>
                    </div>
                    <div class="copyright">
                        <p>&copy; 2021 Shubham-Gawai@1996</p>
                    </div>
                    <div class="socialmedia">
                        <a href="https://www.twitter.com"><img class="social-media-logo" src="./assests/images/twitter.png" alt="twitter-logo"></a>
                        <a href="https://www.instagram.com"><img class="social-media-logo" src="./assests/images/instagram.png" alt="instagram-logo"></a>
                        <a href="https://www.facebook.com/"><img class="social-media-logo" src="./assests/images/facebook.png" alt="facebook-logo"></a>
                    </div>
                </div>`;
document.getElementById("footer").innerHTML = footer;

//Login Function

function login(){

    
    // if(localStorage.getItem("username") && localStorage.getItem("password"))

    var refToInput = document.getElementById("username-field");
    var refToPassword = document.getElementById("password-field");

    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "admin");

    if(refToInput.value == localStorage.getItem("username") && refToPassword.value == localStorage.getItem("password")){
        window.alert("Successfully loggedin");
        body();
    }
    else{
        window.alert("incorrect login details");
    }
}

function body(){
    var btn = '<button id="login-btn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>';
    if(localStorage.getItem("username") != null){
        btn = '<button id="login-btn" type="button" class="btn btn-primary" onclick="logout()">Logout</button>';
    }
    document.getElementsByClassName('head-btn')[0].innerHTML = btn;
    
}
// $(document).ready(function(){
//     if(session){
//         btn = '<button id="login-btn" type="button" class="btn btn-primary" onclick="logout()">Logout</button>';
//     }
//     $('.head-btn').html(btn);
// });

// $('body'){
//     var btn = '<button id="login-btn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>';
//     if(localStorage.getItem("username") != null){
//         btn = '<button id="login-btn" type="button" class="btn btn-primary" onclick="logout()">Logout</button>';
//     }
//     document.getElementsByClassName('head-btn')[0].innerHTML = btn;
    
// }

function logout(){
    var btn = '<button id="login-btn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>';
    alert('logged out');
    localStorage.clear();
    document.getElementsByClassName('head-btn')[0].innerHTML = btn;
}