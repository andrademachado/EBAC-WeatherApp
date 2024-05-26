package ebac.weather.app.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class DailyWeather {

    @JsonProperty("temperature_2m_max")
    private List<Double> maxTemperature;

    @JsonProperty("temperature_2m_min")
    private List<Double> minTemperature;

    @JsonProperty("uv_index_max")
    private List<Double> uvIndex;

    @JsonProperty("weather_code")
    private List<Integer> weatherCode;

    public List<Double> getMaxTemperature() {
        return maxTemperature;
    }

    public void setMaxTemperature(List<Double> maxTemperature) {
        this.maxTemperature = maxTemperature;
    }

    public List<Double> getMinTemperature() {
        return minTemperature;
    }

    public void setMinTemperature(List<Double> minTemperature) {
        this.minTemperature = minTemperature;
    }

    public List<Double> getUvIndex() {
        return uvIndex;
    }

    public void setUvIndex(List<Double> uvIndex) {
        this.uvIndex = uvIndex;
    }

    public List<Integer> getWeatherCode() {
        return weatherCode;
    }

    public void setWeatherCode(List<Integer> weatherCode) {
        this.weatherCode = weatherCode;
    }
}
