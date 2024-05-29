import * as S from './styles';

import weatherIcon from '../../assets/weather-icon.png'
import arrow from '../../assets/arrow.png'

type Props = {
    toggleInfo: (state: boolean) => void
}

const CurrentCardMore = ({ toggleInfo }: Props) => {
    return (
        <S.CurrentCardMore className='card fadeIn'>
            <S.LeftSide>
                <div className='weatherContainer'>
                    <img src={weatherIcon} alt="Icone do clima" />
                    <span className='moreInfoTemperature'>14°C</span>
                </div>
                <span className='moreInfoStatus'>Parcialmente ensolarado</span>
                <span className='moreInfoSubStatus'>Sensação térmica 14°C</span>
                <img onClick={() => toggleInfo(false)} className='reversedArrow' src={arrow} alt="Icone seta" />
            </S.LeftSide>
            <S.MoreInfoList>
                <li>
                    <span className='listTxt'>Pólen</span>
                    <span className='listValue'>16</span>
                </li>
                <li>
                    <span className='listTxt'>Índice de raio UV</span>
                    <span className='listValue'>6</span>
                </li>
                <li>
                    <span className='listTxt'>Ponto de orvalho</span>
                    <span className='listValue'>10</span>
                </li>
                <li>
                    <span className='listTxt'>Rajadas de vento</span>
                    <span className='listValue'>21km/h</span>
                </li>
            </S.MoreInfoList>
        </S.CurrentCardMore>
    )
}

export default CurrentCardMore