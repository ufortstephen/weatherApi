// Declearing form variable
let form = document.getElementById('form');

// Adding eventListener to form
form.addEventListener('submit', getWeather)

// displayWeatherFunction
function displayWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Uyo&units=imperial&APPID=af80b949f75b1d5795e4ec27723680a1')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            // Declearing city variable and outputting city text
            var city = document.getElementById('city');
            city.textContent = data.name.toUpperCase();

            // Declearing Weather variable and outputting text
            let weatherIcon = document.getElementById('wea-img');

            // Adding src attribute to weatherImage
            weatherIcon.setAttribute('src', 'https://openweathermap.org/img/w/02d.png')

            // Declearing latitude 
            var lat = document.getElementById('latitude');
            lat.textContent = `Lat : ${data.coord.lat}`;

            //  Declearing Longitude
            var long = document.getElementById('longitude');
            long.textContent = `Longitude : ${data.coord.lon}`;

            // Declearing country
            var country = document.getElementById('country')
            country.textContent = `${data.sys.country}`;

            // Declearing humudity
            var humidity = document.getElementById('humidity');
            humidity.textContent = `Humidity : ${data.main.humidity}`

            // Declearing temperature
            var temperature = document.getElementById('temperature');
            temperature.textContent = `Temperature : ${data.main.temp}`
        })
}
displayWeather();
// setInterval('displayWeather()', 1000)


// Declearing CarouselDiv as a variable
let carouselDivOne = document.querySelector('.active-carousel')

// Creating a row in carouselDiv
let carouselRow = document.createElement('div');

// Creating columns for carouselRow
let carouselRowColOne = document.createElement("div");
let carouselRowColTwo = document.createElement("div");

// Creating Contents of carouselRowColOne
carouselRowColOne.innerHTML = `
<div class="font-weight-bolder px-3 pt-5 text sticky-top text-row ">
    <h1 class="pb-3 text-center">Welcome to WEATHER UPDATES</h1>
    <h3 class="pb-4 text-uppercase"><li class="" type="none">Don't want to get stranded in bad weather?</li></h3>
    <h4 class="pb-4"><li class="px-5">Search Weather helps you plan ahead and returns current Weather Updates in an instant</li></h4>
    <h4 class="pb-4"><li class="px-5">Live Updates on  Temperature, Humidity, Location, Weather Conditions, etc anywhere in the WORLD</li></h4>
    <h4><li class="px-5">Search for Weather Updates before going on that Journey!!</li></h4>
    <input type="button" class="btn btn-success btn-inline my-5 ml-5" value="Search">

</div>`

// Adding classList to carouselRow Columns
carouselRowColOne.classList.add('col-md-6')
carouselRowColTwo.classList.add('col-md-6')

// Appending Columns to carouselRow
carouselRow.appendChild(carouselRowColOne)
carouselRow.appendChild(carouselRowColTwo)

// Adding ClassList to carousel row
carouselRow.classList.add('row')


// Appending carouselRow to carouselDivOne
carouselDivOne.appendChild(carouselRow)

function getWeather(e) {
    e.preventDefault();
    // Getting InputText Value
    var cityText = document.querySelector('#cityInput').value;
    if (cityText) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityText + '&units=imperial&APPID=af80b949f75b1d5795e4ec27723680a1')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // Declearing and styling the displayWeather box
                let displayWeather = document.createElement('div');
                displayWeather.classList.add('bg-transparent', 'text-white', 'w-90', 'mr-auto', 'ml-auto', 'mb-4', 'py-2');
                displayWeather.style.boxShadow = "0px 0px 3px 1px #c5c5c5";
                displayWeather.style.height = "max-content";
                displayWeather.style.width = "40%";
                displayWeather.innerHTML = `
                 <h6 class="text-center py-2 text-uppercase">COUNTRY : ${data.sys.country}</h6>
                 <h6 class="text-center py-2 text-uppercase">CITY : ${data.name}</h6>
                 <h6 class="text-center py-2 text-uppercase">Condition : <img src="https://openweathermap.org/img/w/03d.png"></h6>
                 <h6 class="text-center py-2 text-uppercase">DES : ${data.weather[0].description}</h6>
                 <h6 class="text-center py-2 text-uppercase">COORDINATES : ${data.coord.lat} , ${data.coord.lon}</h6>
                 <h6 class="text-center py-2 text-uppercase">HUMIDITY : ${data.main.humidity} <span class="text-lowercase">deg</span></h6>
                 <h6 class="text-center py-2 text-uppercase">TEMPERATURE : ${data.main.temp} <sup class="text-lowercase">o</sup>C</h6>
                 <h6 class="text-center py-2 text-uppercase">WIND : ${data.wind.deg}<span class="text-lowercase">deg</span>,
                  ${data.wind.speed}<span class="text-lowercase">km/hr</span></h6>
                 `
                console.log(data)
                    // Appending displayWeather to carouselDivTwo
                carouselRowColTwo.appendChild(displayWeather)
            })

    }
}
var mapDiv = document.createElement('div');
mapDiv.setAttribute('id', 'map');

function initMap() {
    let options = {
        zoom: 8,
        center: {
            lat: 5.0333,
            lng: -5.0333
        }
    }
    let map = new google.maps.Map(mapDiv, options)
}


// Appending mapDiv to body
document.body.appendChild(mapDiv)


console.log(mapDiv)