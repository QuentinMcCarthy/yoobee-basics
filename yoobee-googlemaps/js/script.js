google.maps.event.addDomListener(window, "load", initMap);

function initMap(){
	var mapOptions = {
		center: {
			lat: -41.279214,
			lng: 174.780340
		},
		zoom: 15,
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

	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
