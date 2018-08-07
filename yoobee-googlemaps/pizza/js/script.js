google.maps.event.addDomListener(window, "load", loadStyles);

var map, infoBox, markersLoaded;

const weekDay = new Date().getDay();

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
		styles: styles
	});

	loadPlaces();
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
			$("<div class='placeList-item' data-id='"+place.id+"'>").click(function(){
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
			label: place.id,
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

		map.panTo(new google.maps.LatLng(marker.lat, marker.lng))
		map.setZoom(17);

		var content = "<div><h4>"+marker.title+"</h4>";

		if(marker.address){
			content += "<a href='"+marker.url+"'>"+marker.domain+"</a>";
		}

		content += "<p>"+marker.address+"</p></div>";

		infoBox.setContent(content);
		infoBox.open(map, marker);
	}
}
