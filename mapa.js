var source, destination;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var options = {};
google.maps.event.addDomListener(window, 'load', function () {
    new google.maps.places.Autocomplete(document.getElementById('txtSource'), options);
    new google.maps.places.Autocomplete(document.getElementById('txtDestination'), options);
    directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });
});

function GetRoute() {
    var bogota = new google.maps.LatLng(4.3634, 74.0454);
    var mapOptions = {
       
        center: bogota
    };
    map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
    directionsDisplay.setMap(map);

    source = document.getElementById("txtSource").value;
    destination = document.getElementById("txtDestination").value;

    var request = {
        origin: source,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);

            document.getElementById("distancia").innerHTML="Distancia: " +response.routes[0].legs[0].distance.text;
            document.getElementById("duracion").innerHTML="Duración: " +response.routes[0].legs[0].duration.text;

        }
    });

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [source],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function (response, status) {
        if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
            
            
        } else {
            alert("No se pudo encontrar una ruta por tierra, intente con  otras direcciones");
            document.getElementById("dvMap").innerHTML="";  
        }
    });
}


