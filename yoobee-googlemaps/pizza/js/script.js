// Equivalent of window ready event
google.maps.event.addDomListener(window, "load", loadStyles);

// Global variables
var map, infoBox, markersLoaded, directionsDisplay, markerLocation, placesService,
	travelMode = google.maps.DirectionsTravelMode.DRIVING;

// Constant globals; never change
const weekDay = new Date().getDay();
const directionsService = new google.maps.DirectionsService();
const currentLocation = new google.maps.LatLng(-41.279214, 174.780340);

// Ajax function to get styles from styles.json
// styles.json is the map styles, put in a separate file for less code clutter
function loadStyles(){
	$.ajax({
		type: "GET",
		url: "data/styles.json",
		dataType: "json",
		success: function(data){
			console.log(data);

			// Initialise the map with the loaded styles
			initMap(data);
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
}

function initMap(styles){
	// DirectionsRenderer for the Directions API
	directionsDisplay = new google.maps.DirectionsRenderer();

	// Create the map on the DOM, with options. Styles taken from styles.json
	map = new google.maps.Map(document.getElementById("map"), {
		center: {
			lat: -41.279214,
			lng: 174.780340
		},
		zoom: 14,
		disableDefaultUI: true,
		fullscreenControl: true,
		fullscreenControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		streetViewControl: true,
		streetViewControlOptions: {
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		mapTypeControl: true,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP
		},
		mapTypeId: "roadmap",
		styles: styles
	});

	// Attach the DirectionsRenderer to the map
	directionsDisplay.setMap(map);

	// Div elements for the travel mode controls
	// The travelModeControl function is a constructor for the elements
	var controlDiv = document.createElement("div");
		control = new travelModeControl(controlDiv, map);

	controlDiv.index = 1;

	// Put the travel mode controls on the map.
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(controlDiv);

	// Load all the places and markers
	loadPlaces();
}

// This function is a constructor for the travel modee controls
function travelModeControl(controlDiv, map){
	// These two constants are repeated properties in the below elements
	const controlDivStyles = {
		"float": "left",
		"position": "relative"
	}

	const textDivStyles = {
		"direction": "ltr",
		"overflow": "hidden",
		"text-align": "center",
		"position": "relative",
		"font-family": "Robot, Arial, sans-serif",
		"user-select": "none",
		"font-size": "11px",
		"background-color": "#fff",
		"padding": "8px",
		"background-clip": "padding-box",
		"box-shadow": "rgba(0,0,0,0.3) 0px 1px 4px -1px",
		"cursor": "pointer"
	}

	// The overarching div is given an ID for identification.
	$(controlDiv).attr("id","travelModeControlDiv").css("margin","10px");

	var controlDriving = $("<div>")
		.css(controlDivStyles)
		.click(function(){
			// Set the travelMode var to the relevant travelMode when clicked
			travelMode = google.maps.DirectionsTravelMode.DRIVING;

			getRoute(currentLocation, markerLocation);

			// Display the active travel mode
			$("#travelModeControlDiv > div > div").css("font-weight","");
			$(controlDrivingText).css("font-weight","bold");
		})
		.appendTo(controlDiv);

	var controlDrivingText = $("<div>")
		.css(textDivStyles)
		.css({
			"color": "#000",
			"border-bottom-left-radius": "2px",
			"border-top-left-radius": "2px",
			"min-width": "22px",
			"font-weight": "bold"
		})
		.text("Driving")
		.appendTo(controlDriving);

	var controlWalking = $("<div>")
		.css(controlDivStyles)
		.click(function(){
			// Set the travelMode var to the relevant travelMode when clicked
			travelMode = google.maps.DirectionsTravelMode.WALKING;

			getRoute(currentLocation, markerLocation);

			// Display the active travel mode
			$("#travelModeControlDiv > div > div").css("font-weight","");
			$(controlWalkingText).css("font-weight","bold");
		})
		.appendTo(controlDiv);

	var controlWalkingText = $("<div>")
		.css(textDivStyles)
		.css({
			"color": "rgb(86,86,86)",
			"min-width": "40px",
			"border-left": "0px"
		})
		.text("Walking")
		.appendTo(controlWalking);

	var controlBicycling = $("<div>")
		.css(controlDivStyles)
		.click(function(){
			// Set the travel mode var to the releveant travel mode
			travelMode = google.maps.DirectionsTravelMode.BICYCLING;

			getRoute(currentLocation, markerLocation);

			// Display the active travel mode
			$("#travelModeControlDiv > div > div").css("font-weight","");
			$(controlBicyclingText).css("font-weight","bold");
		})
		.appendTo(controlDiv);

	var controlBicyclingText = $("<div>")
		.css(textDivStyles)
		.css({
			"color": "rgb(86,86,86)",
			"border-bottom-right-radius": "2px",
			"border-top-right-radius": "2px",
			"min-width": "40px",
			"border-left": "0px"
		})
		.text("Bicycling")
		.appendTo(controlBicycling);
}

// Load the place data and create the markers on the map
function loadPlaces(){
	$.ajax({
		type: "GET",
		url: "data/places.json",
		dataType: "json",
		success: function(data){
			console.log(data);

			// The delay relates to the timouts for the drop animations
			const delay = 250;

			// Drop all the markers on a delay
			for(var i = 0; i < data.length; i++){
				dropMarker(data[i], (i * delay));
			}

			// This timeout is to stop the infobox for the markers from not being deleted
			// By stopping the user from clicking on markers before they're finished loading
			setTimeout(function(){
				markersLoaded = true;
			}, ((data.length + 1) * delay))
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
}

// Function for the drop animations
function dropMarker(place,interval){
	setTimeout(function(){
		// Create every list item in the list on the side
		$("#placeList").append(
			$("<div class='placeList-item' data-uid='"+place.uid+"'>").click(function(){
				moveToMarker(marker);
			}).append(
				$("<h3>").text(place.placeName)
			).append(
				$("<div>").append(
					$("<p>").text(place.placeDesc)
				).append(
					$("<p>").text("Today's Open Hours: "+place.hours[weekDay])
				).append(
					$("<span>").text(place.address)
				)
			)
		).append("<hr>");

		// Create the marker with all the relevant information
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(place.lat, place.lng),
			map: map,
			animation: google.maps.Animation.DROP,
			label: place.uid,
			title: place.placeName,
			description: place.placeDesc,
			address: place.address,
			url: place.website.url,
			domain: place.website.domain,
			lng: place.lng,
			lat: place.lat
		});

		// Create an infobox
		infoBox = new google.maps.InfoWindow();

		// Click event for the markers for panning and zooming as well as others
		google.maps.event.addListener(marker, "click", function(){
			moveToMarker(marker);
		});

	}, interval);
}

function moveToMarker(marker){
	// Prevent doing anything until all the markers have loaded
	if(markersLoaded){
		// If an infobox already exists, close it.
		if(infoBox){
			infoBox.close();

			// Close the list item on the side
			$(".placeList-item div").css("display","");
		}

		// Open the list item on the side
		$(".placeList-item[data-id='"+marker.label+"'] div").css("display","block");

		// Panning and zooming to the marker
		// map.panTo(new google.maps.LatLng(marker.lat, marker.lng))
		// map.setZoom(17);

		// HTML for the Infobox
		var content = "<div><h4>"+marker.title+"</h4>";

		if(marker.address){
			content += "<a href='"+marker.url+"'>"+marker.domain+"</a>";
		}

		content += "<p>"+marker.address+"</p></div>";

		infoBox.setContent(content);

		// Open the infobox after setting the HTML
		infoBox.open(map, marker);

		// Get the marker's coordinates
		markerLocation = new google.maps.LatLng(marker.lat, marker.lng);

		// Find the place info for the location
		// findPlaceInfo(marker.title);

		// Get the route to the location from the current location
		getRoute(currentLocation, markerLocation);
	}
}

function findPlaceInfo(title){
	console.log(title);

	// The request for the place
	const request = {
		query: title + " Wellington New Zealand",
		fields: [
			"id",
			"name",
			"photos",
			"formatted_address",
			"rating",
			"opening_hours"
		]
	};

	// Overwrite the service for every request
	placesService = new google.maps.places.PlacesService(map);

	// Find the location and get the data, based on the request
	placesService.findPlaceFromQuery(request, function(response, status){
		if(status === "OK"){
			for(var i = 0; i < response.length; i++){
				console.log(response[i]);

				console.log(response[i].photos[0].getUrl({
					"maxWidth": 300,
					"maxHeight": 300,
				}));
			}
		}else{
			console.log("Something went wrong");
			console.log(status);
		}
	});
}

function getRoute(start, end){
	// The request for the route
	const request = {
		origin: start,
		destination: end,
		optimizeWaypoints: true,
		travelMode: travelMode
	};

	// Get the data for the route and display it on the map
	directionsService.route(request, function(response,status){
		if(status === google.maps.DirectionsStatus.OK){
			directionsDisplay.setDirections(response);
		}else{
			console.log("Something went wrong");
			console.log(status);
		}
	});
}
