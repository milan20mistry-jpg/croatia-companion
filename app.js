// ==========================
// CROATIA COMPANION DATABASE
// ==========================







// ==========================
// CREATE MAP
// ==========================
const icons = {

    sightseeing: L.icon({
        iconUrl:"https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        iconSize:[32,32],
        iconAnchor:[16,32]
    }),

    food: L.icon({
        iconUrl:"https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
        iconSize:[32,32],
        iconAnchor:[16,32]
    }),

    beaches: L.icon({
        iconUrl:"https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        iconSize:[32,32],
        iconAnchor:[16,32]
    }),

    nature: L.icon({
        iconUrl:"https://maps.google.com/mapfiles/ms/icons/green-dot.png",
        iconSize:[32,32],
        iconAnchor:[16,32]
    }),

    islands: L.icon({
        iconUrl:"https://maps.google.com/mapfiles/ms/icons/purple-dot.png",
        iconSize:[32,32],
        iconAnchor:[16,32]
    }),

   Ferry: L.icon({
    iconUrl:"https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
    iconSize:[32,32],
    iconAnchor:[16,32]
}),

Accommodation: L.icon({
    iconUrl:"https://maps.google.com/mapfiles/ms/icons/pink-dot.png",
    iconSize:[32,32],
    iconAnchor:[16,32]
}),

};

const map = L.map('map', {
    zoomControl:false
}).setView([45.1, 15.2], 7);



// Map background

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '© OpenStreetMap contributors'
    }
).addTo(map);





// ==========================
// LOAD LOCATIONS
// ==========================


// Store active markers
let markers = [];
let myTrip = JSON.parse(localStorage.getItem("croatiaTrip")) || [];
let itinerary = JSON.parse(localStorage.getItem("croatiaItinerary")) || [];


// Load markers function

function displayLocations(locationList) {


    // Remove old markers

    markers.forEach(marker => {

        map.removeLayer(marker);

    });


    markers = [];



    // Add new markers

    locationList.forEach(location => {
        console.log(location.name, location.category);


        const marker = L.marker(
[
location.coordinates[0],
location.coordinates[1]
],
{
icon:
location.category === "Food"
?
icons.food

:

location.category === "Beaches"
?
icons.beaches

:

location.category === "Nature"
?
icons.nature

:

location.category === "Islands"
?
icons.islands

:

location.category === "Ferry"
?
icons.Ferry

:

location.category === "Accommodation"
?
icons.Accommodation

:

icons.sightseeing

}
)
.addTo(map)

console.log(location.name, location.bestParking);
if (location.name === "Prapratno Ferry Port") {
    
}
marker.bindPopup(`
    console.log(location);

<div class="popup-card">


<img 
src="${location.image || 'https://via.placeholder.com/300'}"
class="popup-image"
>


<h2>
${location.name}
</h2>



<p>
<b>📍 Region:</b> ${location.region}
</p>
${
location.type === "Restaurant"

?

`

<p>
<b>📍 Near:</b>
${location.nearbySightseeing || "Unknown"}
</p>

<p>
<b>🚶 Travel time:</b>
${location.restaurantTravelTime || "Unknown"}
</p>
<p>
<b>📍 Navigate:</b><br>

<a
href="${location.restaurantMaps}"
target="_blank">

Open in Google Maps

</a>

</p>

`

:

`

<p>
<b>🚗 Travel time:</b>
${location.travelTime || "Unknown"}
</p>

<p>
<b>Transport:</b>
${location.transport || "Unknown"}
</p>

`

}


<p>
<b>🗂️ Category:</b> ${location.category}
</p>


<p>
${location.description}
</p>


${
location.accommodationMaps
?

`

<p>
<b>📍 Navigate:</b><br>

<a
href="${location.accommodationMaps}"
target="_blank">

Open Airbnb Location in Google Maps

</a>

</p>

`

:

""

}


<p>
⭐ ${location.rating}/5
</p>


<p>
🏷️ ${location.tags.join(", ")}
</p>
${

location.bestParking ?

`

<hr>

<h3>TEST PARKING</h3>

<p>
<b>🅿️ Best Parking:</b><br>
${location.bestParking}
</p>

<p>
<b>💰 Typical price:</b><br>
${location.parkingPrice}
</p>

<p>
<b>🚶 Walk:</b><br>
${location.walkTime}
</p>

<p>
<b>📍 Navigate:</b><br>

<a
href="${location.parkingMaps}"
target="_blank">

Open in Google Maps

</a>

</p>

`

:

""

}
${
location.ferryTimetable
?

`

<hr>

<h3>⛴️ Ferry Timetable</h3>

${location.ferryTimetable}

`

:

""

}
<hr>

<p>${location.name}</p>




<button onclick="addToTrip('${location.name}')">
❤️ Add to Trip
</button>


<br><br>


<select id="day-select-${location.name}">

<option>
Choose Day
</option>


${itinerary.map((day,index) =>

`

<option value="${index}">
${new Date(day.date).toLocaleDateString(
"en-GB",
{
day:"numeric",
month:"long"
}
)}
</option>

`

).join("")}


</select>


<button onclick="addToDay('${location.name}')">

📅 Add to Day

</button>


</div>

`);


        markers.push(marker);


    });


}



// Category filter

function filterLocations(category) {


    if(category === "All"){

        displayLocations(locations);

    }

    else {


        const filtered = locations.filter(location =>

            location.category === category

        );


        displayLocations(filtered);

    }


}



// Load everything initially

displayLocations(locations);
// ==========================
// SEARCH SYSTEM
// ==========================


const searchBox = document.getElementById("search-box");


searchBox.addEventListener("input", function(){


    const searchText = searchBox.value.toLowerCase();



    const results = locations.filter(location =>

        location.name.toLowerCase().includes(searchText) ||

        location.region.toLowerCase().includes(searchText) ||

        location.tags.join(" ").toLowerCase().includes(searchText)

    );



    displayLocations(results);


});
function addToTrip(placeName){


    const place = locations.find(location =>

        location.name === placeName

    );


    myTrip.push(place);


updateTrip();

localStorage.setItem(
    "croatiaTrip",
    JSON.stringify(myTrip)
);

}



function updateTrip() {


    const tripList = document.getElementById("trip-list");


    if (myTrip.length === 0) {

        tripList.innerHTML =
        "No saved locations yet";

        return;

    }



    tripList.innerHTML = "";



    myTrip.forEach((place, index) => {


        tripList.innerHTML += `


        <div class="trip-item">


            <span>
            ❤️ ${place.name}
            </span>


            <button onclick="removeFromTrip(${index})">

            ❌

            </button>


        </div>


        `;


    });


}
updateTrip();
function removeFromTrip(index) {


    myTrip.splice(index, 1);


    localStorage.setItem(
        "croatiaTrip",
        JSON.stringify(myTrip)
    );


    updateTrip();


}
// ==========================
// ITINERARY BUILDER
// ==========================


function addDay(){


    itinerary.push({

        day:
        itinerary.length + 1,

        places:[]

    });



    saveItinerary();

    displayItinerary();


}




function saveItinerary(){


    localStorage.setItem(

        "croatiaItinerary",

        JSON.stringify(itinerary)

    );


}




function displayItinerary(){


    const container =
    document.getElementById("itinerary");


    container.innerHTML = "";



    itinerary.forEach((day,dayIndex) => {


        container.innerHTML += `


        <div class="day-card">


<h4>
${new Date(day.date).toLocaleDateString(
"en-GB",
{
day:"numeric",
month:"long",
year:"numeric"
}
)}
</h4>



        ${
            day.places.length === 0

            ?

            "No places added"

            :

day.places.map((place,index) =>

`

<div class="day-place">

📍 ${place.name}


<button onclick="removeFromDay(${dayIndex},${index})">

❌

</button>


</div>

`

).join("")

        }


        </div>


        `;


    });


}



displayItinerary();
function addToDay(placeName){


    const select =
    document.getElementById(
        `day-select-${placeName}`
    );


    const chosenDay =
    select.value;



    if(chosenDay === "Choose Day"){

        alert("Create a day first!");

        return;

    }



    const place =
    locations.find(location =>

        location.name === placeName

    );



const day =
itinerary[chosenDay];



    day.places.push(place);



    saveItinerary();

    displayItinerary();


}
// ==========================
// DATE ITINERARY GENERATOR
// ==========================


function generateItinerary(){


    const start =
    new Date(
        document.getElementById("start-date").value
    );


    const end =
    new Date(
        document.getElementById("end-date").value
    );


    if(!start || !end){

        alert("Choose both dates");

        return;

    }



    itinerary = [];



    let current = new Date(start);



    while(current <= end){


        itinerary.push({

            date:
            current.toISOString().split("T")[0],

            places:[]

        });



        current.setDate(
            current.getDate()+1
        );


    }



    saveItinerary();

    displayItinerary();


}
// ==========================
// BASE LOCATION
// ==========================


function saveBase(){


    const base =
    document.getElementById(
        "base-location"
    ).value;


    localStorage.setItem(
        "croatiaBase",
        base
    );


    alert(
        "Base location saved!"
    );


}
// ==========================
// LOAD BASE LOCATION
// ==========================

function loadBase(){

    const savedBase = localStorage.getItem("croatiaBase");


    if(savedBase){

        document.getElementById("base-location").value = savedBase;

    }

}


loadBase();
function removeFromDay(dayIndex, placeIndex){


    itinerary[dayIndex].places.splice(placeIndex,1);


    saveItinerary();


    displayItinerary();


}
// ==========================
// SMART DAY PLANNER
// ==========================


function planDay(){


    const suggestions =
    document.getElementById("suggestions");


const nearby =
locations
.filter(place =>
    place.transport &&
    place.transport.includes("🚗")
)
.slice(0,5);



    suggestions.innerHTML =
    "<h3>Suggested Places</h3>";



    nearby.forEach(place => {


        suggestions.innerHTML += `


        <div class="suggestion-card">


        📍 <b>${place.name}</b>


        <br>


        🚗 ${place.distanceFromBase}
        minutes away


        <br>


        ⭐ ${place.rating}/5


        </div>


        `;


    });


}
const toggleSidebar =
document.getElementById("toggle-sidebar");


const sidebar =
document.getElementById("sidebar");


toggleSidebar.addEventListener("click", function(){


    sidebar.classList.toggle("closed");


    if(sidebar.classList.contains("closed")){

        toggleSidebar.innerHTML = "▶";

    }

    else{

        toggleSidebar.innerHTML = "◀";

    }


});