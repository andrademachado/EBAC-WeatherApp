package ebac.weather.app.model;

public class ConsultData {

    private double latitude;
    private double longitude;
    private int forecastDays;
    private int pastDays;
    
    public ConsultData() {
    }

    public ConsultData(double latitude, double longitude, int forecastDays, int pastDays) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.forecastDays = forecastDays;
        this.pastDays = pastDays;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public int getForecastDays() {
        return forecastDays;
    }

    public void setForecastDays(int forecastDays) {
        this.forecastDays = forecastDays;
    }

    public int getPastDays() {
        return pastDays;
    }

    public void setPastDays(int pastDays) {
        this.pastDays = pastDays;
    }

    @Override
    public String toString() {
        return "ConsultData{" +
                "latitude=" + latitude +
                ", longitude=" + longitude +
                ", forecastDays=" + forecastDays +
                ", pastDays=" + pastDays +
                '}';
    }
}
