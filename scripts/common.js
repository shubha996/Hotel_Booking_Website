var header =    `<div class="header-div">
                    <div id="logo-div">
                        <a href="index.html">
                            <img id="header-logo" src="./assests/images/logo.png" alt="logo">
                        </a>
                    </div>
                    <div id="login-div">
                        <button id="login-btn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
                    </div>
                </div>`;
document.getElementById("header").innerHTML = header;

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

function login(){
    var refToInput = document.getElementById("username-field");
    var refToPassword = document.getElementById("password-field");

    if(refToInput.value === "admin" && refToPassword.value === "admin"){
        window.alert("Successfully loggedin");
        document.getElementById("login-btn").innerHTML = "Logout";
    }else{
        window.alert("incorrect login details");
    }
}