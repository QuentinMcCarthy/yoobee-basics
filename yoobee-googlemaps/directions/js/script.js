google.maps.event.addDomListener(window, "load", initMap);

var directionsService = new google.maps.DirectionsService(),
	directionsDisplay,
	map;

function initMap(){
	directionsDisplay = new google.maps.DirectionsRenderer();

	const wellington = new google.maps.LatLng(-41.286859, 174.775807);

	const mapOptions = {
		zoom: 6,
		mapTypeId: "roadmap",
		center: wellington
	};

	map = new google.maps.Map(document.getElementById("map"), mapOptions);

	directionsDisplay.setMap(map);

	getRoute(wellington);
}

function getRoute(start){
	var waypts = [];

	const stop = new google.maps.LatLng(-38.6857, 176.0702);
	const end = new google.maps.LatLng(-36.8485, 174.7633);

	waypts.push({
		location: stop,
		stopover: true
	});

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

			let route = response.routes[0];
		}else{
			console.log("Something went wrong");
			console.log(status);
		}
	});
}
