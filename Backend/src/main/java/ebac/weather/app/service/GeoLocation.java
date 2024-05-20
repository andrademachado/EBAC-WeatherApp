package ebac.weather.app.service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import ebac.weather.app.model.ConsultData;
import ebac.weather.app.model.Location;

@RestController
public class GeoLocation {

    public Location myLocation;

    @CrossOrigin(origins = "*") // Ajustar as origens para a Prod
    @PostMapping("/location")
    public ResponseEntity<String> processLocation(@RequestBody String formData) throws JsonMappingException, JsonProcessingException {
        //System.out.println(formData);

        //ObjectMapper mapper = new ObjectMapper();
        //myLocation = mapper.readValue(formData, Location.class);
        ObjectMapper objectMapper = new ObjectMapper();

        ConsultData consultData = new ConsultData();

        try {
            consultData = objectMapper.readValue(formData, ConsultData.class);
    
            double latitude = consultData.getLatitude();
            double longitude = consultData.getLongitude();
            int forecastDays = consultData.getForecastDays();
            int pastDays = consultData.getPastDays();

        } catch (JsonProcessingException e) {
            e.getMessage();
        }

        String dados = callApi(consultData);

        return new ResponseEntity<>(dados, HttpStatus.OK);
    }

    private String callApi(ConsultData consultData) {

        System.out.println("Calling API with Latitude: " + consultData.getLatitude() + " and Longitude: " + consultData.getLongitude());

        String endereco = String.format("https://api.open-meteo.com/v1/forecast?latitude=%s&longitude=%s&hourly=temperature_2m",
                consultData.getLatitude(), consultData.getLongitude());

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
