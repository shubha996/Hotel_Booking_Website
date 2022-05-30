// Search Hotels API call
var url = window.location.search;
var searchURL = new URLSearchParams(url);
var city = searchURL.get("city");

const xhr = new XMLHttpRequest();
var data = null;

xhr.addEventListener("readystatechange", function () {
	if (xhr.readyState === xhr.DONE) {
		var jasondata = JSON.parse(xhr.responseText).data;
        console.log(jasondata)
        dataPopulation(jasondata);
	}
});

xhr.open("GET", "https://travel-advisor.p.rapidapi.com/locations/search?&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US&query=" + city);

xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "70f4ec573emsh921104ddc08f3f0p1477a8jsn1b749f29c79e");

xhr.send(data);

// Function for populating data
function dataPopulation(element){
    element.forEach(element => {
        if(element.result_type == "lodging"){
            var newElement =    `<a class="nav-link" href="detail.html?id=${element.result_object.location_id}">
                                    <div class="hotel-image-description-div" id="list-view-div-start">
                                        <div class="hotel-image-div">
                                            <img class="hotel-image" src="${element.result_object.photo.images.large.url}" alt="${element.result_object.name}">
                                        </div>
                                        <div class="description">
                                            <h3>${element.result_object.name}</h3>
                                            <p>
                                                <span class="fa fa-star checked"></span>
                                                <span>${element.result_object.rating}</span>                                                
                                            </p>
                                            <p>${element.result_object.address}</p>
                                        </div>
                                    </div>
                                </a>`;
            document.getElementById("hotel-list").innerHTML = document.getElementById("hotel-list").innerHTML + newElement;
        }
    });
}
