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
    return (
        <S.CurrentCard className='card fadeIn'>
                    <h2 className='cardTitle'>Clima atual</h2>
                    <p>17 de Maio de 2024 10:12</p>
                    <S.MainInfo>
                        <img className='mainIcon' src={weatherIcon} alt="Weather icon" />
                        <span className='currentTemperature'>14°C</span>
                        <div className='weatherInfo'>
                            <span className='description'>Parcialmente ensolarado</span>
                            <span>Sensação térmica 14°</span>
                        </div>
                    </S.MainInfo>
                    <S.MaxMin className='max-min'>Máxima de 16° / Minima de 7°</S.MaxMin>
                    <S.WeatherCardBottom>
                        <S.infoList>
                            <li>
                                <h3 className='itemTitle'>Qualidade do ar<img className='listIcon' src={airIcon} alt="Icone qualidade do ar" /></h3>
                                <span className='listData'>Boa</span>
                            </li>
                            <li>
                                <h3 className='itemTitle'>Umidade<img className='listIcon' src={humidityIcon} alt="Icone qualidade do ar" /></h3>
                                <span className='listData'>79%</span>
                            </li>
                            <li>
                                <h3 className='itemTitle'>vento<img className='listIcon' src={windIcon} alt="Icone qualidade do ar" /></h3>
                                <span className='listData'>7 km/h</span>
                            </li>
                            <li>
                                <h3 className='itemTitle'>Pressão<img className='listIcon' src={pressureIcon} alt="Icone qualidade do ar" /></h3>
                                <span className='listData'>1018 mb </span>
                            </li>
                        </S.infoList>
                        <div onClick={() => toggleInfo(true)} className='details'>
                            <span>Mais detalhes</span><img className='more-arrow' src={arrow} alt="Icone seta" />
                        </div>
                    </S.WeatherCardBottom>
                </S.CurrentCard>
    )
}

export default CurrentCard