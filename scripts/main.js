// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoicmFwaGFlbGRyZiIsImEiOiJjbDFheDloZHAyMmhjM2JxemQ0N2VnemQ2In0.mUICglM96vfVPIm44y567w';

// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/raphaeldrf/cl1df7pqx002w15myia660k7v',
  center: [4.322840, 52.067101],
  zoom: 13
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

var elmamabbq = new mapboxgl.Popup().setHTML('<h1>Restaurant</h1><h3>El Mama BBQ</h3><p>Hier hebben ze de lekkerste spareribs</p>');
var marker1 = new mapboxgl.Marker()
  .setLngLat([4.310019438636989, 52.076027883176025])
  .setPopup(elmamabbq)
  .addTo(map);

var teds = new mapboxgl.Popup().setHTML('<h1>Lunchroom</h1><h3>TEDS</h3><p>Hier kan je lekker lunchen</p>');
var marker1 = new mapboxgl.Marker()
	.setLngLat([4.310522313660262, 52.087585020337926])
	.setPopup(teds)
	.addTo(map);

var harbor = new mapboxgl.Popup().setHTML('<h1>Club</h1><h3>The Harbor Club</h3><p>Exclusief visrestaurant</p>');
var marker1 = new mapboxgl.Marker()
	.setLngLat([4.334153677408797, 52.074271548649946])
	.setPopup(harbor)
	.addTo(map);

function getAPIdata() {

	var url = 'https://api.openweathermap.org/data/2.5/weather';
	var apiKey ='392adfd106910053116827ef5650e109';
	var city = document.getElementById('city').value;
  	cityName.innerHTML = city;

	// construct request
	var request = url + '?' + 'appid=' + apiKey + '&' + 'q=' + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		// render weatherCondition
		onAPISucces(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	// render weather in DOM
	var weatherBox = document.getElementById('result');
	weatherBox.innerHTML = degC + '&#176;C <br>' + type;
}


function onAPIError(error) {
	console.error('Fetch request failed', error);
	var weatherBox = document.getElementById('result');
	weatherBox.innerHTML = 'No weather data available <br /> Did you enter a valid city?'; 
}

document.getElementById('getWeather').onclick = function(){
	// init data stream
	getAPIdata();
};

