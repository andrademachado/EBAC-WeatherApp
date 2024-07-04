import { useSelector } from 'react-redux'

import { useGetNewLocationQuery } from '../../services/api'
import { RootReducer } from '../../store'
import { weatherIcon } from '../../utils/icons'
import LoadCardA from '../../loaders/LoadCardA'

import * as S from './styles'

import airIcon from '../../assets/air.png'
import humidityIcon from '../../assets/humidity.png'
import windIcon from '../../assets/windy.png'
import uv from '../../assets/sunny.png'

type Props = {
    toggleInfo: (state: boolean) => void
}

const CurrentCard = ({ toggleInfo }: Props) => {

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ]

    const getAirQuality = (index: number) => {
        if (index >= 0 && index <= 50) {
            return "Boa";
        } else if (index >= 51 && index <= 100) {
            return "Regular";
        } else if (index >= 101 && index <= 150) {
            return "Inadequada";
        } else if (index >= 151 && index <= 200) {
            return "Má";
        } else if (index >= 201 && index <= 300) {
            return "Péssima";
        } else if (index >= 301 && index <= 500) {
            return "Crítica";
        } else {
            return "Desconhecido";
        }
    }

    if (!data) return <LoadCardA />

    return (
        <S.CurrentCard className='card cardHeightA'>
            <div className='fadeIn'>
                <h2 className='cardTitle'>Clima atual</h2>
                <p className='cardSubtitle'>
                    {data?.location.localtime.slice(8, 10)} de&nbsp;
                    {months[Number(data?.location.localtime.slice(5, 7)) - 1]} de&nbsp;
                    {data?.location.localtime.slice(0, 4)}&nbsp;
                    {data?.location.localtime.slice(11, 16)}
                </p>
                <S.MainInfo>
                    <img
                        className='mainIcon'
                        src={weatherIcon(data?.current.is_day, data?.current.condition.code)}
                        alt="Weather icon"
                    />
                    <span className='currentTemperature'>{data?.current.temp_c}°C</span>
                    <div className='weatherInfo'>
                        <span className='description'>{data?.current.condition.text}</span>
                        <span>Sensação térmica {data?.current.feelslike_c}°C</span>
                    </div>
                </S.MainInfo>
                <S.MaxMin className='max-min'>Máxima de {data?.forecast.forecastday[0].day.maxtemp_c}°C / Minima de {data?.forecast.forecastday[0].day.mintemp_c}°C</S.MaxMin>
                <S.WeatherCardBottom>
                    <S.infoList>
                        <li>
                            <h3 className='itemTitle'>Qualidade do ar<img className='listIcon' src={airIcon} alt="Icone qualidade do ar" /></h3>
                            <span className='listData'>{data && getAirQuality(data.current.air_quality['us-epa-index'])}</span>
                        </li>
                        <li>
                            <h3 className='itemTitle'>Umidade<img className='listIcon' src={humidityIcon} alt="Icone qualidade do ar" /></h3>
                            <span className='listData'>{data?.current.humidity}%</span>
                        </li>
                        <li>
                            <h3 className='itemTitle'>vento<img className='listIcon' src={windIcon} alt="Icone qualidade do ar" /></h3>
                            <span className='listData'>{data?.current.wind_kph} km/h</span>
                        </li>
                        <li>
                            <h3 className='itemTitle'>Índice UV<img className='listIcon' src={uv} alt="Icone qualidade do ar" /></h3>
                            <span className='listData'>{data?.current.uv}</span>
                        </li>
                    </S.infoList>
                    <S.CustomButton>
                        <button onClick={() => toggleInfo(true)} className='detailsBtn'>
                            <span>Mais detalhes</span><span>&rarr;</span>
                        </button>
                    </S.CustomButton>
                </S.WeatherCardBottom>
            </div>
        </S.CurrentCard>
    )
}

export default CurrentCard