import { useSelector } from 'react-redux';

import { RootReducer } from '../../store';
import { useGetNewLocationQuery } from '../../services/api';
import { weatherIcon } from '../../utils/icons'

import * as S from './styles';

import arrow from '../../assets/arrow.png'

type Props = {
    toggleInfo: (state: boolean) => void
}

const CurrentCardMore = ({ toggleInfo }: Props) => {

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    return (
        <S.CurrentCardMore className='card cardHeightA'>
            <div className="currentMoreContainer fadeIn">
                <S.LeftSide>
                    <div className='weatherContainer'>
                        <img src={weatherIcon(data?.current.is_day, data?.current.condition.code)} alt="Icone do clima" />
                        <span className='moreInfoTemperature'>{data?.current.temp_c}°C</span>
                    </div>
                    <span className='moreInfoStatus'>{data?.current.condition.text}</span>
                    <span className='moreInfoSubStatus'>Sensação térmica {data?.current.feelslike_c}°C</span>
                    <img onClick={() => toggleInfo(false)} className='reversedArrow' src={arrow} alt="Icone seta" />
                </S.LeftSide>
                <S.MoreInfoList>
                    <li>
                        <span className='listTxt'>Volume de chuva</span>
                        <span className='listValue'>{data?.current.precip_mm} mm</span>
                    </li>
                    <li>
                        <span className='listTxt'>Pressão</span>
                        <span className='listValue'>{data?.current.pressure_mb} mb</span>
                    </li>
                    <li>
                        <span className='listTxt'>Ponto de orvalho</span>
                        <span className='listValue'>{data?.current.dewpoint_c}</span>
                    </li>
                    <li>
                        <span className='listTxt'>Rajadas de vento</span>
                        <span className='listValue'>{data?.current.gust_kph}km/h</span>
                    </li>
                </S.MoreInfoList>
            </div>
        </S.CurrentCardMore>
    )
}

export default CurrentCardMore