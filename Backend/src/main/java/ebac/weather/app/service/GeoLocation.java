package ebac.weather.app.service;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GeoLocation {

    @PostMapping("/location")
    public String processLocation(@RequestBody String formData) {
        System.out.println(formData);

        return "Dados recebidos com sucesso";
    }
}
