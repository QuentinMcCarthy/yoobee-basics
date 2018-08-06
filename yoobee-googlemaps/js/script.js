google.maps.event.addDomListener(window, "load", initMap);

var map;

function initMap(){
	var mapOptions = {
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
		styles: [
			{
				featureType: "landscape",
				stylers: [
					{
						color: "#d4d9e9"
					}
				]
			},
			{
				featureType: "poi.park",
				stylers: [
					{
						color: "#6ba358"
					}
				]
			},
			{
				featureType: "road",
				stylers: [
					{
						color: "#c2ccdd"
					}
				]
			},
			{
				featureType: "transit.line",
				stylers: [
					{
						color: "#ebb854"
					}
				]
			},
			{
				featureType: "transit.line",
				elementType: "labels.text.fill",
				stylers: [
					{
						color: "#000000"
					}
				]
			},
			{
				featureType: "water",
				stylers: [
					{
						color: "#3b5998"
					}
				]
			}
		]
	}

	map = new google.maps.Map(document.getElementById("map"), mapOptions);

	addAllMarkers();
}

function dropMarker(place,num,interval){
	setTimeout(function(){
		$("#placeList").append("<div class='placeList-item'><h3>"+place.placeName+"</h3></div><hr>");

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(place.lat, place.lng),
			title: place.placeName,
			map: map,
			animation: google.maps.Animation.DROP,
			label: num.toString()
		});
	}, interval);
}

function addAllMarkers(){
	$.ajax({
		type: "GET",
		url: "data/markers.json",
		dataType: "json",
		success: function(data){
			console.log(data);

			for(var i = 0; i < data.length; i++){
				dropMarker(data[i], i + 1, i * 250);
			}
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
}
