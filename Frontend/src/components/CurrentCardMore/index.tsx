import { useSelector } from 'react-redux';

import { RootReducer } from '../../store';
import { useGetNewLocationQuery } from '../../services/api';

import * as S from './styles';

import weatherIcon from '../../assets/weather-icon.png'
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
                        <img src={weatherIcon} alt="Icone do clima" />
                        <span className='moreInfoTemperature'>{data?.current.temp_c}°C</span>
                    </div>
                    <span className='moreInfoStatus'>{data?.current.condition.text}</span>
                    <span className='moreInfoSubStatus'>Sensação térmica {data?.current.feelslike_c}°C</span>
                    <img onClick={() => toggleInfo(false)} className='reversedArrow' src={arrow} alt="Icone seta" />
                </S.LeftSide>
                <S.MoreInfoList>
                    <li>
                        <span className='listTxt'>Pólen</span>
                        <span className='listValue'>X</span>
                    </li>
                    <li>
                        <span className='listTxt'>Índice de raio UV</span>
                        <span className='listValue'>X</span>
                    </li>
                    <li>
                        <span className='listTxt'>Ponto de orvalho</span>
                        <span className='listValue'>X</span>
                    </li>
                    <li>
                        <span className='listTxt'>Rajadas de vento</span>
                        <span className='listValue'>Xkm/h</span>
                    </li>
                </S.MoreInfoList>
            </div>
        </S.CurrentCardMore>
    )
}

export default CurrentCardMore