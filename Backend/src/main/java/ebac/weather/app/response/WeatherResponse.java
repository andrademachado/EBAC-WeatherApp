package ebac.weather.app.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import ebac.weather.app.model.CurrentWeather;
import ebac.weather.app.model.DailyWeather;
import ebac.weather.app.model.HourlyWeather;

public class WeatherResponse {
    @JsonProperty("current")
    private CurrentWeather currentWeather;

    @JsonProperty("daily")
    private DailyWeather dailyWeather;

    @JsonProperty("hourly")
    private HourlyWeather hourlyWeather;

    public CurrentWeather getCurrentWeather() {
        return currentWeather;
    }

    public void setCurrentWeather(CurrentWeather currentWeather) {
        this.currentWeather = currentWeather;
    }

    public DailyWeather getDailyWeather() {
        return dailyWeather;
    }

    public void setDailyWeather(DailyWeather dailyWeather) {
        this.dailyWeather = dailyWeather;
    }

    public HourlyWeather getHourlyWeather() {
        return hourlyWeather;
    }

    public void setHourlyWeather(HourlyWeather hourlyWeather) {
        this.hourlyWeather = hourlyWeather;
    }
}
