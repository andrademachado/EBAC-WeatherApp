package ebac.weather.app.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import ebac.weather.app.model.CurrentWeather;
import ebac.weather.app.response.WeatherResponse;
import ebac.weather.app.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
public class WeatherController {

    @Autowired
    private WeatherService service;

    @GetMapping("/current-weather")
    public Mono<ResponseEntity<WeatherResponse>> getCurrentWeather() {
        return service.getCurrentWeather("-23.5505", "-46.6333").map(ResponseEntity::ok);
    }
}
