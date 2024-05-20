package ebac.weather.app.service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import ebac.weather.app.model.ConsultData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class GeoLocation {

    public ConsultData consultData;

    @CrossOrigin(origins = "*") // Ajustar as origens para a Prod
    @PostMapping("/location")
    public ResponseEntity<String> processLocation(@RequestBody String formData) throws JsonMappingException, JsonProcessingException {

        ObjectMapper mapper = new ObjectMapper();
        ConsultData consultData = new ConsultData();
        System.out.println(formData);
        try {
            consultData = mapper.readValue(formData, ConsultData.class);
            System.out.println(consultData);
        } catch (JsonProcessingException e) {
            e.getMessage();
        }

        String data = callApi(consultData);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    private String callApi(ConsultData apiData) {

        ObjectMapper mapper = new ObjectMapper();

        StringBuilder urlBuilder = new StringBuilder("https://api.open-meteo.com/v1/forecast?hourly=temperature_2m")
                .append("&latitude=").append(apiData.getLatitude())
                .append("&longitude=").append(apiData.getLongitude());

        if (apiData.getForecastDays() != 0) {
            urlBuilder.append("&forecast_days=").append(apiData.getForecastDays());
        } else {
            urlBuilder.append("&forecast_days=7");
        }

        if (apiData.getPastDays() != 0) {
            urlBuilder.append("&past_days=").append(apiData.getPastDays());
        }

        String url = urlBuilder.toString();

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create(url)).build();
        HttpResponse<String> response = null;

        try {
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        String responseJson = response.body();
        System.out.println(responseJson);
        return responseJson;
    }
}
