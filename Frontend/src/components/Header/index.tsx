import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPlace } from "../../store/reducers/mainPlace";
import { RootReducer } from "../../store";
import { useGetNewLocationQuery } from "../../services/api";
import { setMap } from "../../store/reducers/map";
import { weatherIcon } from "../../utils/icons";

import * as S from './styles'
import search from '../../assets/search.png'
import menu from '../../assets/menu.png'

const Header = () => {

    const dispatch = useDispatch()

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    const [inpputError, setInputError] = useState(false)

    useEffect(() => {
        const iconUrl = weatherIcon(data?.current.is_day, data?.current.condition.code)
        if (data && iconUrl) {
            const id = `${data.location.lat}, ${data.location.lon}`
            const lat = data.location.lat
            const lng = data.location.lon
            const initialMapData = { id, lat, lng, iconUrl }
            dispatch(setMap(initialMapData))
        }
    }, [data])

    const [city, setCity] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value)
    }

    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (city.length != 0) {
            setInputError(false)
            let normalizedCity = city.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            let userCity = normalizedCity.trim()

            if (userCity === "fortaleza") {
                return dispatch(setPlace("-3.71, -38.54")), setCity("")
            }

            dispatch(setPlace(userCity))
            setCity("")

        } else {
            setInputError(true)
        }
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handlePosition);
        } else {
            alert("Geolocalização não é suportada por este navegador.");
        }
    }

    const handlePosition = (position: GeolocationPosition) => {
        const newCity = `${position.coords.latitude}, ${position.coords.longitude}`

        dispatch(setPlace(newCity))
    }

    return (
        <S.Header>
            <h1>
                <img className='logo' src={logo} alt="Logo" />
            </h1>
            <S.InputContainer onSubmit={getWeather}>
                <input
                    onChange={handleChange}
                    value={city} className={`input ${inpputError ? 'inputError' : ''}`}
                    onClick={() =>setInputError(false)}
                    type="text"
                    placeholder='Pesquisar por local'
                />
                <button className='searchBtn' type="submit"><img src={search} title="Buscar" alt="Pesquisar" /></button>
            </S.InputContainer>
            <S.MenuContainer>
                <S.ButtonContainer>
                    <button type="button" className="myLocation" onClick={getLocation}>Minha localização</button>
                </S.ButtonContainer>
                <S.Menu src={menu} alt="Ícone menu" />
            </S.MenuContainer>
        </S.Header>
    )
}

export default Header