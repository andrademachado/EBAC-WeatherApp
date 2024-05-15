function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("demo").innerHTML = "Geolocalizacao nao suportada pelo browser"
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    document.getElementById("demo").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;

    var formData = new FormData();
    formData.append("laatitude", latitude);
    formData.append("longitude", longitude);

    var xhr = new XMLHttpRequest(); // Ajustar o endereco para o envio 
    xhr.open("POST", "/location");
    xhr.send(formData);
}