package ebac.weather.app.service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import ebac.weather.app.model.Location;


@RestController
public class TestController {

    @GetMapping("/teste")
    public String test(String endereco, Location location) {
        
        HttpClient cliente = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create("https://api.open-meteo.com/v1/forecast?latitude=55.52&longitude=13.41&hourly=temperature_2m")).build();
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
