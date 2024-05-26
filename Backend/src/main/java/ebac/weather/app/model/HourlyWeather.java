package ebac.weather.app.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class HourlyWeather {

    @JsonProperty("temperature_2m")
    private List<Double> temperature;
    @JsonProperty("relative_humidity_2m")
    private List<Double> humidity;
    @JsonProperty("precipitation_probability")
    private List<Double> precipitationProbability;
    @JsonProperty("weather_code")
    private List<Integer> weatherCode;
    @JsonProperty("wind_speed_10m")
    private List<Double> windSpeed;
    @JsonProperty("wind_direction_10m")
    private List<Double> windDirection;

    public List<Double> getTemperature() {
        return temperature;
    }

    public void setTemperature(List<Double> temperature) {
        this.temperature = temperature;
    }

    public List<Double> getHumidity() {
        return humidity;
    }

    public void setHumidity(List<Double> humidity) {
        this.humidity = humidity;
    }

    public List<Double> getPrecipitationProbability() {
        return precipitationProbability;
    }

    public void setPrecipitationProbability(List<Double> precipitationProbability) {
        this.precipitationProbability = precipitationProbability;
    }

    public List<Integer> getWeatherCode() {
        return weatherCode;
    }

    public void setWeatherCode(List<Integer> weatherCode) {
        this.weatherCode = weatherCode;
    }

    public List<Double> getWindSpeed() {
        return windSpeed;
    }

    public void setWindSpeed(List<Double> windSpeed) {
        this.windSpeed = windSpeed;
    }

    public List<Double> getWindDirection() {
        return windDirection;
    }

    public void setWindDirection(List<Double> windDirection) {
        this.windDirection = windDirection;
    }
}
