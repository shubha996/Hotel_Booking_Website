
// View More & View Less Button Toggle Function
function toggle(){
    var reftodiv = document.getElementById("city-cards-div-2");
    var reftobtn = document.getElementById("viewmore-btn");

    if(reftodiv.style.display === "none"){
        reftodiv.style.display = "flex";
        reftobtn.innerText = "View Less";
    }else{
        reftodiv.style.display = "none";
        reftobtn.innerHTML = "View More";
    }
}

// Search Bar Functionality using location search api
document.getElementById("searchbar-input").addEventListener("input", locationSearchBox);

function locationSearchBox () {
    var refToSearchBox = document.getElementById("searchbar-input").value;
    if(refToSearchBox.length >= 3){
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                var responseFromServer = xhr.responseText;
                var jsondata = JSON.parse(responseFromServer);
                console.log(jsondata.data.Typeahead_autocomplete.results);
                fetchResult(jsondata.data.Typeahead_autocomplete.results);
            }
        }
        xhr.open("GET", `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${refToSearchBox}&lang=en_US&units=km`);
        xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
        xhr.setRequestHeader("X-RapidAPI-Key", "70f4ec573emsh921104ddc08f3f0p1477a8jsn1b749f29c79e")
        xhr.send(data);
    }else{
        refToSearchBox.innerHTML = "";
    }
    
}

function fetchResult(data){
    let result = "";
    data.forEach(getElement);

    function getElement(item){
        if(item.detailsV2 != undefined && item.detailsV2.placeType == "CITY"){
            result = result + `<a href="list.html?city=${item.detailsV2.names.name}">${item.detailsV2.names.name}</a>`
        }
    }
    document.getElementById("search-results").innerHTML = result;
}