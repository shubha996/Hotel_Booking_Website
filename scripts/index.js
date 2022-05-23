








// View More & View Less Button Toggle Function
function toggle(){
    var reftodiv = document.getElementById("city-cards-div-2");
    var reftobtn = document.getElementById("viewmore-btn");

    if(reftodiv.style.display == "none"){
        reftodiv.style.display = "flex";
        reftobtn.innerText = "View Less";
    }else{
        reftodiv.style.display = "none";
        reftobtn.innerHTML = "View More";
    }
}