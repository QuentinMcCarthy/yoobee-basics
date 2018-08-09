google.maps.event.addDomListener(window, "load", loadStyles);

var map, infoBox, markersLoaded, directionsDisplay,
	directionsService = new google.maps.DirectionsService(),
	travelMode = google.maps.DirectionsTravelMode.DRIVING;

const weekDay = new Date().getDay();

const currentLocation = new google.maps.LatLng(-41.279214, 174.780340);

function loadStyles(){
	$.ajax({
		type: "GET",
		url: "data/styles.json",
		dataType: "json",
		success: function(data){
			console.log(data);

			initMap(data);
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
}

function initMap(styles){
	directionsDisplay = new google.maps.DirectionsRenderer();

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

	directionsDisplay.setMap(map);

	var controlDiv = document.createElement("div");
		control = new travelModeControl(controlDiv, map);

	controlDiv.index = 1;
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(controlDiv);

	loadPlaces();
}

function travelModeControl(controlDiv, map){
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

	$(controlDiv).attr("id","travelModeControlDiv").css("margin","10px");

	var controlDriving = $("<div>")
		.css(controlDivStyles)
		.click(function(){
			travelMode = google.maps.DirectionsTravelMode.DRIVING;

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
			travelMode = google.maps.DirectionsTravelMode.WALKING;

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
			travelMode = google.maps.DirectionsTravelMode.BICYCLING;

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

function loadPlaces(){
	$.ajax({
		type: "GET",
		url: "data/places.json",
		dataType: "json",
		success: function(data){
			console.log(data);

			const delay = 250;

			for(var i = 0; i < data.length; i++){
				dropMarker(data[i], (i * delay));
			}

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

function dropMarker(place,interval){
	setTimeout(function(){
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

		infoBox = new google.maps.InfoWindow();

		google.maps.event.addListener(marker, "click", function(){
			moveToMarker(marker);
		});

	}, interval);
}

function moveToMarker(marker){
	if(markersLoaded){
		if(infoBox){
			infoBox.close();

			$(".placeList-item div").css("display","");
		}

		$(".placeList-item[data-id='"+marker.label+"'] div").css("display","block");

		// map.panTo(new google.maps.LatLng(marker.lat, marker.lng))
		// map.setZoom(17);

		var content = "<div><h4>"+marker.title+"</h4>";

		if(marker.address){
			content += "<a href='"+marker.url+"'>"+marker.domain+"</a>";
		}

		content += "<p>"+marker.address+"</p></div>";

		infoBox.setContent(content);
		infoBox.open(map, marker);

		var markerLocation = new google.maps.LatLng(marker.lat, marker.lng);

		getRoute(currentLocation, markerLocation);
	}
}

function getRoute(start, end){
	const request = {
		origin: start,
		destination: end,
		optimizeWaypoints: true,
		travelMode: travelMode
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
