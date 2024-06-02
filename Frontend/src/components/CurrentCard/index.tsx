import { useSelector } from 'react-redux'

import { useGetNewLocationQuery } from '../../services/api'
import { RootReducer } from '../../store'

import * as S from './styles'

import weatherIcon from '../../assets/weather-icon.png'
import airIcon from '../../assets/air.png'
import humidityIcon from '../../assets/humidity.png'
import windIcon from '../../assets/windy.png'
import pressureIcon from '../../assets/pressure.png'
import arrow from '../../assets/arrow.png'

type Props = {
    toggleInfo: (state: boolean) => void
}

const CurrentCard = ({ toggleInfo }: Props) => {

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"   
    ]

    return (
        <S.CurrentCard className='card cardHeightA'>
            <div className='fadeIn'>
                <h2 className='cardTitle'>Clima atual</h2>
                <p>
                    {data?.location.localtime.slice(8,10)} de&nbsp;
                    {months[Number(data?.location.localtime.slice(5,7)) - 1]} de&nbsp;
                    {data?.location.localtime.slice(0, 4)}&nbsp;
                    {data?.location.localtime.slice(11, 16)}
                </p>
                <S.MainInfo>
                    <img className='mainIcon' src={weatherIcon} alt="Weather icon" />
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
                            <span className='listData'>X</span>
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
                            <h3 className='itemTitle'>Pressão<img className='listIcon' src={pressureIcon} alt="Icone qualidade do ar" /></h3>
                            <span className='listData'>{data?.current.pressure_mb} mb </span>
                        </li>
                    </S.infoList>
                    <div onClick={() => toggleInfo(true)} className='details'>
                        <span>Mais detalhes</span><img className='more-arrow' src={arrow} alt="Icone seta" />
                    </div>
                </S.WeatherCardBottom>
            </div>
        </S.CurrentCard>
    )
}

export default CurrentCard