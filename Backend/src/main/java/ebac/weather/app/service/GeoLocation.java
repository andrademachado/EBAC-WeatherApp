package ebac.weather.app.service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import ebac.weather.app.model.Location;

@RestController
public class GeoLocation {

    public Location myLocation;

    @CrossOrigin(origins="*") // Ajustar as origens para a Prod
    @PostMapping("/location")
    public String processLocation(@RequestBody String formData) throws JsonMappingException, JsonProcessingException {
        System.out.println(formData);

        ObjectMapper mapper = new ObjectMapper();
        myLocation = mapper.readValue(formData, Location.class);

        System.out.println(myLocation.getLatitude());
        System.out.println(myLocation.getLongitude());

        callApi(myLocation);
        return "Dados recebidos com sucesso";
    }

    private String callApi(Location location) {

        System.out.println("Calling API with Latitude: " + location.getLatitude() + " and Longitude: " + location.getLongitude());
        
        String endereco = String.format("https://api.open-meteo.com/v1/forecast?latitude=%s&longitude=%s&hourly=temperature_2m", 
            location.getLatitude(), location.getLongitude());

        HttpClient cliente = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create(endereco)).build();
        HttpResponse<String> response = null;

        try {
            response = cliente.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println("Teste");
        String json = response.body();
        return json;
    }
}
