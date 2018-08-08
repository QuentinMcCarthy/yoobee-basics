google.maps.event.addDomListener(window, "load", initMap);

var directionsService = new google.maps.DirectionsService(),
	directionsDisplay, map;

const wellington = new google.maps.LatLng(-41.286859, 174.775807);
const auckland = new google.maps.LatLng(-36.8485, 174.7633);
const taupo = new google.maps.LatLng(-38.6857, 176.0702);
const tauranga = new google.maps.LatLng(-37.687882, 176.165172);
const newPlymouth = new google.maps.LatLng(-39.057007, 174.075015);

function initMap(){
	directionsDisplay = new google.maps.DirectionsRenderer();

	const mapOptions = {
		zoom: 6,
		mapTypeId: "roadmap",
		center: wellington
	};

	map = new google.maps.Map(document.getElementById("map"), mapOptions);

	directionsDisplay.setMap(map);

	// getRoute(wellington, newPlymouth);

	initForm();
}

function initForm(){
	$("#placeRequest").submit(function(){
		event.preventDefault();

		getOrigin();
	})
}

function getOrigin(){
	var geocoder = new google.maps.Geocoder();

	var start;

	geocoder.geocode({
		address: $("input[name='origin']").val()
	}, function(results, status){
		if(status === google.maps.GeocoderStatus.OK){
			console.log(results);

			start = results[0].geometry.location;

			getDestination(start);
		}else{
			console.log("Something went wrong");
			console.log(status);
		}
	})
}

function getDestination(start){
	var geocoder = new google.maps.Geocoder()

	var end;

	geocoder.geocode({
		address: $("input[name='destination']").val()
	}, function(results, status){
		if(status === google.maps.GeocoderStatus.OK){
			console.log(results);

			end = results[0].geometry.location;

			getRoute(start, end);
		}else{
			console.log("Something went wrong");
			console.log(status);
		}
	})
}

function getRoute(start, end){
	const request = {
		origin: start,
		destination: end,
		waypoints: waypts,
		optimizeWaypoints: true,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};

	directionsService.route(request, function(response,status){
		if(status === google.maps.DirectionsStatus.OK){
			directionsDisplay.setDirections(response);
		}else{
			console.log("Something went wrong");
			console.log(status);
		}
	});
}
