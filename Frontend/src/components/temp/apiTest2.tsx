import { useState } from "react";

const APItest2 = () => {

    type Condition = {
        text: string
    }

    type Current = {
        temp_c: number
        condition: Condition
    }

    type Location = {
        name: string
        region: number
    }

    type weatherProps = {
        location: Location
        current: Current
    }

    const [city, setCity] = useState<string>("")
    const [weatherForecast, setWeatherForecast] = useState<weatherProps | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleChange = (e: any) => {
        setCity(e.target.value)
    }

    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (city.length != 0) {
            fetchWeather(city)
        } else {
            alert("DIgite uma localização para buscar.")
        }
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handlePosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    const handlePosition = (position: GeolocationPosition) => {
        const newCity = `${position.coords.latitude}, ${position.coords.longitude}`

        fetchWeather(newCity)
    }

    const fetchWeather = (location: string) => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=c9937db5e2d042708f205929242505&q=${location}&lang=pt`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Local não encontrado`);
                }
                return res.json();
            })
            .then((data) => {
                setWeatherForecast(data);
                setError(null);
            })
            .catch((err) => {
                setWeatherForecast(null);
                setError(err.message);
            });
    };

    return (
        <form onSubmit={getWeather}>
            <input onChange={handleChange} type="text" placeholder="Digite uma cidade" />
            <button type="submit">Ver previsão</button>
            <button type="button" onClick={getLocation}>Minha localização</button>
            {weatherForecast?.location.name} - {weatherForecast?.location.region} - {weatherForecast?.current.temp_c}° C - {weatherForecast?.current.condition.text}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
    )
}

export default APItest2
