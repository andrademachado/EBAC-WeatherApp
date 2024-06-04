import * as S from './styles'

import icon1 from '../../assets/partly-cloudy-day.png'
import icon2 from '../../assets/doublecloud.png'
import icon4 from '../../assets/thunder-rain.png'

const DaysContainer = () => {

    return (
        <S.DaysContainer>
            <S.DaysList>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>DOM.</span>
                    <span className='temperature'>22°C 12°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>SEG.</span>
                    <span className='temperature'>21°C 12°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>TER.</span>
                    <span className='temperature'>21°C 12°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>QUA.</span>
                    <span className='temperature'>21°C 12°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>ONTEM</span>
                    <span className='temperature'>14°C 11°C</span>
                </S.ListItem>
            </S.DaysList>
            <S.Today>
                <img src={icon1} alt="" />
                <span className='day'>HOJE</span>
                <span className='temperature'>20°C 7°C</span>
            </S.Today>
            <S.DaysList>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>AMANHÃ</span>
                    <span className='temperature'>16°C 8°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon2} alt="" />
                    <span className='day'>DOM.</span>
                    <span className='temperature'>16°C 9°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>SEG.</span>
                    <span className='temperature'>19°C 10°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon4} alt="" />
                    <span className='day'>TER.</span>
                    <span className='temperature'>20°C 16°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon4} alt="" />
                    <span className='day'>QUA.</span>
                    <span className='temperature'>27°C 17°C</span>
                </S.ListItem>
            </S.DaysList>
        </S.DaysContainer>
    )
}

export default DaysContainer
