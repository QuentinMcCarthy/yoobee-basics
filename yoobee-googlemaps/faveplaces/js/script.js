google.maps.event.addDomListener(window, "load", initMap);

var map, infoBox;

function initMap(){
	var mapOptions = {
		center: {
			lat: -41.258208,
			lng: 174.842056
		},
		zoom: 12,
		fullscreenControl: false
	}

	map = new google.maps.Map(document.getElementById("map"), mapOptions);

	getPlaceData();
}

function getPlaceData(){
	$.ajax({
		type: "GET",
		url: "data/places.json",
		dataType: "json",
		success: function(data){
			console.log(data);

			for(var i = 0; i < data.length; i++){
				dropMarker(data[i], i * 250);
			}
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
			$("<div class='placeList-item'>").click(function(){
				moveToMarker(marker);
			}).append(
				$("<h3>").text(place.placeName)
			).append(
				$("<p>").text(place.placeDesc)
			).append(
				$("<span>").text(place.address)
			)
		).append("<hr>");

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(place.lat, place.lng),
			title: place.placeName,
			description: place.placeDesc,
			address: place.address,
			lng: place.lng,
			lat: place.lat,
			map: map,
			animation: google.maps.Animation.DROP,
			label: (place.id + 1).toString()
		});

		markerClickEvent(marker);

	}, interval);
}

function markerClickEvent(marker){
	infoBox = new google.maps.InfoWindow();

	google.maps.event.addListener(marker, "click", function(){
		moveToMarker(marker);
	});
}

function moveToMarker(marker){
	if(infoBox){
		infoBox.close();
	}

	map.panTo(new google.maps.LatLng(marker.lat, marker.lng));
	map.setZoom(17)

	infoBox.setContent("<div><h4>"+marker.title+"</h4><p>"+marker.address+"</p></div>");
	infoBox.open(map, marker);
}
