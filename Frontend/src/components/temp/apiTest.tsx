import { useState } from "react";

const APItest = () => {

    type Current = {
        temp_c: number
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
        fetch(`http://api.weatherapi.com/v1/current.json?key=c9937db5e2d042708f205929242505&q=${city}&lang=pt`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`City not found`)
                }
                return res.json()
            })
            .then((data) => {
                setWeatherForecast(data)
                setError(null)
            })
            .catch((err) => {
                setWeatherForecast(null)
                setError(err.message)
            })
    }

    return (
        <form onSubmit={getWeather}>
            <input onChange={handleChange} value={city} type="text" placeholder="Digite uma cidade" />
            <button type="submit">Ver previsão</button>
            {weatherForecast?.location.name} - {weatherForecast?.location.region} - {weatherForecast?.current.temp_c}° C
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
    )
}

export default APItest
