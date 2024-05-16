package ebac.weather.app.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DadosDia {

    @JsonProperty("time")
    private List<String> horas;

    @JsonProperty("temperature_2m")
    private List<String> temperaturas;

    public DadosDia() {
    }

    public DadosDia(List<String> horas, List<String> temperaturas) {
        this.horas = horas;
        this.temperaturas = temperaturas;
    }

    public List<String> getHoras() {
        return horas;
    }

    public void setHoras(List<String> horas) {
        this.horas = horas;
    }

    public List<String> getTemperaturas() {
        return temperaturas;
    }

    public void setTemperaturas(List<String> temperaturas) {
        this.temperaturas = temperaturas;
    }
}
