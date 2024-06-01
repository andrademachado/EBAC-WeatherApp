import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlace } from "../../store/reducers/mainPlace";

const APItest2 = () => {

    /* type Condition = {
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
    } */

    const dispatch = useDispatch()

    const [city, setCity] = useState<string>("")

    const handleChange = (e: any) => {
        setCity(e.target.value)
    }

    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (city.length != 0) {
            dispatch(setPlace(city))
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

        dispatch(setPlace(newCity))
    }

    return (
        <form onSubmit={getWeather}>
            <input onChange={handleChange} type="text" placeholder="Digite uma cidade" />
            <button type="submit">Ver previsão</button>
            <button type="button" onClick={getLocation}>Minha localização</button>
        </form>
    )
}

export default APItest2
