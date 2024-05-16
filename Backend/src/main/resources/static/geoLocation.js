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

    const xhr = new XMLHttpRequest(); // Ajustar o endereco para o envio 
    xhr.open("POST", "http://localhost:8080/location", false);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert("Localização enviada com sucesso")
                var response = JSON.parse(xhr.responseText);

                document.getElementById("dadosAPI").innerHTML = JSON.stringify(response);
            } else {
                alert("Erro ao enviar localização")
            }
        }
    }
    var data = JSON.stringify({latitude: latitude, longitude: longitude});
    xhr.send(data);
}

function reload() {
    location.reload();
}