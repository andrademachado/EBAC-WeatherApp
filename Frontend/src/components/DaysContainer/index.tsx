import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { useGetNewLocationQuery } from '../../services/api'

import * as S from './styles'

import icon1 from '../../assets/partly-cloudy-day.png'
import icon2 from '../../assets/doublecloud.png'
import icon4 from '../../assets/thunder-rain.png'
import { weatherIcon } from '../../utils/icons'

const DaysContainer = () => {

    const currentDate = new Date()
    const daysCount = 5

    const pastDate = new Date(currentDate)
    pastDate.setDate(currentDate.getDate() - daysCount)

    const pastYear = pastDate.getFullYear()
    const pastMonth = String(pastDate.getMonth() + 1).padStart(2, '0')
    const pastDay = String(pastDate.getDate()).padStart(2, '0')
    const initialDate = `${pastYear}-${pastMonth}-${pastDay}`

    const currentYear = currentDate.getFullYear()
    const currentMonth = String(currentDate.getMonth()).padStart(2, '0')
    const currentDay = String(currentDate.getDate()).padStart(2, '0')
    const finalDate = `${currentYear}-${currentMonth}-${currentDay}`

    const windowWidth = window.innerWidth

    const scrollableRef = useRef<HTMLDivElement>(null)

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)
    const { data } = useGetNewLocationQuery(storedLocation)

    const [pastData, setPastData] = useState<WeatherProps>()

    useEffect(() => {
        if (scrollableRef.current && windowWidth <= 1402) {
            const div = scrollableRef.current
            const contentWidth = div.scrollWidth
            const visibleWidth = windowWidth
            const middlePosition = (contentWidth - visibleWidth) / 2

            scrollableRef.current.scrollLeft = middlePosition
        }
    }, [])

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/history.json?key=c9937db5e2d042708f205929242505&lang=pt&q=${storedLocation}&end_dt=${finalDate}&dt=${initialDate}`)
            .then((res) => res.json())
            .then((res) => setPastData(res))
    }, [data])

    return (
        <S.DaysContainer ref={scrollableRef}>
            <S.DaysList>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>DOM.</span>
                    <span className='temperature'>max°C / MIN°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>SEG.</span>
                    <span className='temperature'>MAX°C / MIN°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>TER.</span>
                    <span className='temperature'>MAX°C / MIN°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>QUA.</span>
                    <span className='temperature'>MAX°C / MIN°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>ONTEM</span>
                    <span className='temperature'>MAX°C / MIN°C</span>
                </S.ListItem>
            </S.DaysList>
            <S.Today>
                <img src={icon1} />
                <span className='day'>HOJE</span>
                <span className='temperature'>MAX°C / MIN°C</span>
            </S.Today>
            <S.DaysList>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>AMANHÃ</span>
                    <span className='temperature'>16°C / 8°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon2} alt="" />
                    <span className='day'>DOM.</span>
                    <span className='temperature'>16°C / 9°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon1} alt="" />
                    <span className='day'>SEG.</span>
                    <span className='temperature'>19°C / 10°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon4} alt="" />
                    <span className='day'>TER.</span>
                    <span className='temperature'>20°C / 16°C</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={icon4} alt="" />
                    <span className='day'>QUA.</span>
                    <span className='temperature'>27°C / 17°C</span>
                </S.ListItem>
            </S.DaysList>
        </S.DaysContainer>
    )
}

export default DaysContainer
