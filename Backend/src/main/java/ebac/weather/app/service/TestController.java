package ebac.weather.app.service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import ebac.weather.app.model.Location;

@RestController
public class TestController {

    @GetMapping("/teste")
    public ResponseEntity<String> test(String endereco, Location location) {

        HttpClient cliente = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&forecast_days=3")).build();
        HttpResponse<String> response = null;

        try {
            response = cliente.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println("Teste");
        String json = response.body();

        try {
            dividirPorDia(json);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(json);
    }

    public static void dividirPorDia(String json) throws Exception {
        
        ObjectMapper mapper = new ObjectMapper();

        JsonNode rootNode = mapper.readTree(json);
        
        JsonNode timeNode = rootNode.path("hourly").path("time");
        JsonNode temperatureNode = rootNode.path("hourly").path("temperature_2m");

        Map<String, Double> timeMap = new HashMap<>();

        for (int i = 0; i < timeNode.size(); i++) {
            timeMap.put(timeNode.get(i).asText(), temperatureNode.get(i).asDouble());
        }

        System.out.println(timeMap);
    }
}
