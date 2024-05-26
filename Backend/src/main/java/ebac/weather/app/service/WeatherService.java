package ebac.weather.app.service;

import ebac.weather.app.model.CurrentWeather;
import ebac.weather.app.response.WeatherResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Mono;
import reactor.util.retry.Retry;

import java.time.Duration;

@Service
public class WeatherService {

    private final String BASE_URL = "https://api.open-meteo.com/v1/forecast";
    private final WebClient webClient;


    public WeatherService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(BASE_URL).build();
    }

    public Mono<WeatherResponse> getCurrentWeather(String latitude, String longitude) {

        return webClient.get().uri(uriBuilder -> uriBuilder
                .queryParam("latitude", latitude)
                .queryParam("longitude", longitude)
                .queryParam("current", "temperature_2m", "relative_humidity_2m",
                        "apparent_temperature", "precipitation", "rain", "showers", "snowfall", "weather_code",
                        "surface_pressure", "wind_speed_10m", "wind_direction_10m", "is_day", "cloud_cover")
                .queryParam("daily", "weather_code", "temperature_2m_max", "temperature_2m_min",
                        "uv_index_max")
                .queryParam("hourly", "temperature_2m", "relative_humidity_2m",
                        "precipitation_probability", "weather_code", "wind_speed_10m", "wind_direction_10m")

                .build()).retrieve().bodyToMono(WeatherResponse.class)
                .timeout(Duration.ofSeconds(5))  // Tempo de espera
                .retryWhen(Retry.fixedDelay(3, Duration.ofSeconds(2)));
    }
}
