// Header Template
var header =    `<div class="header-div">
                    <div id="logo-div">
                        <a href="index.html">
                            <img id="header-logo" src="./assests/images/logo.png" alt="logo">
                        </a>
                    </div>
                    <div id="login-div">
                        <button id="login-btn" type="button" class="btn btn-primary" data-bs-target="#exampleModal">Login</button>
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