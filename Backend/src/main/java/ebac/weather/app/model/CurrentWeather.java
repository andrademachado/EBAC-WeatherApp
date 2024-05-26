package ebac.weather.app.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CurrentWeather {

    @JsonProperty("temperature_2m")
    private String temperature;

    @JsonProperty("relative_humidity_2m")
    private String humidity;

    @JsonProperty("apparent_temperature")
    private String apparentTemperature;

    @JsonProperty("precipitation")
    private String precipitation;

    @JsonProperty("rain")
    private String rain;

    @JsonProperty("shower")
    private String shower;

    @JsonProperty("snowfall")
    private String snowfall;

    @JsonProperty("weather_code")
    private String weatherCode;

    @JsonProperty("surface_pressure")
    private String surfacePressure;

    @JsonProperty("wind_speed_10m")
    private String windSpeed10m;

    @JsonProperty("wind_direction_10m")
    private String windDirection10m;

    @JsonProperty("is_day")
    private String isDay;

    @JsonProperty("cloud_cover")
    private String cloudCover;

    public String getTemperature() {
        return temperature;
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    public String getHumidity() {
        return humidity;
    }

    public void setHumidity(String humidity) {
        this.humidity = humidity;
    }

    public String getApparentTemperature() {
        return apparentTemperature;
    }

    public void setApparentTemperature(String apparentTemperature) {
        this.apparentTemperature = apparentTemperature;
    }

    public String getPrecipitation() {
        return precipitation;
    }

    public void setPrecipitation(String precipitation) {
        this.precipitation = precipitation;
    }

    public String getRain() {
        return rain;
    }

    public void setRain(String rain) {
        this.rain = rain;
    }

    public String getShower() {
        return shower;
    }

    public void setShower(String shower) {
        this.shower = shower;
    }

    public String getSnowfall() {
        return snowfall;
    }

    public void setSnowfall(String snowfall) {
        this.snowfall = snowfall;
    }

    public String getWeatherCode() {
        return weatherCode;
    }

    public void setWeatherCode(String weatherCode) {
        this.weatherCode = weatherCode;
    }

    public String getSurfacePressure() {
        return surfacePressure;
    }

    public void setSurfacePressure(String surfacePressure) {
        this.surfacePressure = surfacePressure;
    }

    public String getWindSpeed10m() {
        return windSpeed10m;
    }

    public void setWindSpeed10m(String windSpeed10m) {
        this.windSpeed10m = windSpeed10m;
    }

    public String getWindDirection10m() {
        return windDirection10m;
    }

    public void setWindDirection10m(String windDirection10m) {
        this.windDirection10m = windDirection10m;
    }

    public String getIsDay() {
        return isDay;
    }

    public void setIsDay(String isDay) {
        this.isDay = isDay;
    }

    public String getCloudCover() {
        return cloudCover;
    }

    public void setCloudCover(String cloudCover) {
        this.cloudCover = cloudCover;
    }
}
