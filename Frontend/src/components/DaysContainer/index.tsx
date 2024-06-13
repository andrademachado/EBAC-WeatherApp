import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { useGetNewLocationQuery } from '../../services/api'
import { weatherIcon } from '../../utils/icons'

import * as S from './styles'

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
        if (data) {
            fetch(`https://api.weatherapi.com/v1/history.json?key=c9937db5e2d042708f205929242505&lang=pt&q=${storedLocation}&end_dt=${finalDate}&dt=${initialDate}`)
                .then((res) => res.json())
                .then((res) => setPastData(res))
        }
    }, [data])

    const handleIcon = (index: number, endpoint: string) => {
        let conditionCode = null

        if (endpoint === "history") {
            conditionCode = pastData?.forecast.forecastday[index].day.condition.code
        } else {
            conditionCode = data?.forecast.forecastday[index].day.condition.code
        }

        return weatherIcon(1, conditionCode)
    }

    const handleDate = (index: number, endpoint: string) => {
        let exactDay = null

        if (endpoint === "history") {
            exactDay = pastData?.forecast.forecastday[index].date.slice(8, 10)
        } else {
            exactDay = data?.forecast.forecastday[index].date.slice(8, 10)
        }

        return exactDay
    }

    const handleMaxMin = (index: number, endpoint: string) => {
        let MaxMin = null

        if (endpoint === "history") {
            MaxMin = `${pastData?.forecast.forecastday[index].day.maxtemp_c}°C / ${pastData?.forecast.forecastday[index].day.mintemp_c}°C`
        } else {
            MaxMin = `${data?.forecast.forecastday[index].day.maxtemp_c}°C / ${data?.forecast.forecastday[index].day.mintemp_c}°C`
        }

        return MaxMin
    }

    return (
        <S.DaysContainer ref={scrollableRef} className={pastData ? "isVisible fadeIn" : "hide fadeIn"}>
            <S.DaysList>
                <S.ListItem>
                    <img src={handleIcon(0, "history")} alt="Icone do tempo" />
                    <span className='day'>{handleDate(0, "history")}</span>
                    <span className='temperature'>{handleMaxMin(0, "history")}</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={handleIcon(1, "history")} alt="Icone do tempo" />
                    <span className='day'>{handleDate(1, "history")}</span>
                    <span className='temperature'>{handleMaxMin(1, "history")}</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={handleIcon(2, "history")} alt="Icone do tempo" />
                    <span className='day'>{handleDate(2, "history")}</span>
                    <span className='temperature'>{handleMaxMin(2, "history")}</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={handleIcon(3, "history")} alt="Icone do tempo" />
                    <span className='day'>{handleDate(3, "history")}</span>
                    <span className='temperature'>{handleMaxMin(3, "history")}</span>
                </S.ListItem>
            </S.DaysList>

            <S.DaysList>
                <S.ListItem>
                    <img src={handleIcon(4, "history")} alt="Icone do tempo" />
                    <span className='day'>ONTEM</span>
                    <span className='temperature'>{handleMaxMin(4, "history")}</span>
                </S.ListItem>
                <S.Today>
                    <img src={handleIcon(0, "forecast")} />
                    <span className='day'>HOJE</span>
                    <span className='temperature'>{handleMaxMin(0, "forecast")}</span>
                </S.Today>
                <S.ListItem>
                    <img src={handleIcon(1, "forecast")} alt="Icone do tempo" />
                    <span className='day'>AMANHÃ</span>
                    <span className='temperature'>{handleMaxMin(1, "forecast")}</span>
                </S.ListItem>
            </S.DaysList>

            <S.DaysList>
                <S.ListItem>
                    <img src={handleIcon(2, "forecast")} alt="Icone do tempo" />
                    <span className='day'>{handleDate(2, "forecast")}</span>
                    <span className='temperature'>{handleMaxMin(2, "forecast")}</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={handleIcon(2, "forecast")} alt="Icone do tempo" />
                    <span className='day'>{handleDate(2, "forecast")}</span>
                    <span className='temperature'>{handleMaxMin(2, "forecast")}</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={handleIcon(2, "forecast")} alt="Icone do tempo" />
                    <span className='day'>{handleDate(2, "forecast")}</span>
                    <span className='temperature'>{handleMaxMin(2, "forecast")}</span>
                </S.ListItem>
                <S.ListItem>
                    <img src={handleIcon(2, "forecast")} alt="Icone do tempo" />
                    <span className='day'>{handleDate(2, "forecast")}</span>
                    <span className='temperature'>{handleMaxMin(2, "forecast")}</span>
                </S.ListItem>
            </S.DaysList>
        </S.DaysContainer>
    )
}

export default DaysContainer
