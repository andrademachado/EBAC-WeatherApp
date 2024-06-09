import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { RootReducer } from '../../store'
import { useGetNewLocationQuery } from '../../services/api'
import { weatherIcon } from '../../utils/icons'

import * as S from './styles'

const HoursCard = () => {

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    const [hoursData, setHoursData] = useState<Hour[]>([])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 6
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 6
        }
    };

    useEffect(() => {
        const currentHour = data?.location.localtime.slice(0, 13)
        const arrHours = data?.forecast.forecastday[0].hour
        const arrNextDay = data?.forecast.forecastday[1].hour

        const targetIndex = arrHours?.findIndex(entry => entry.time.slice(0, 13) === currentHour);

        if (arrHours && targetIndex) {
            let dataCollector: Hour[] = []
            for (let i = targetIndex; i < arrHours.length; i++) {
                let newHourData = {
                    time: arrHours[i].time.slice(11, 16),
                    temp_c: arrHours[i].temp_c,
                    is_day: arrHours[i].is_day,
                    condition: arrHours[i].condition,
                    wind_kph: arrHours[i].wind_kph,
                    humidity: arrHours[i].humidity,
                    chance_of_rain: arrHours[i].chance_of_rain,
                }

                dataCollector.push(newHourData)
            }

            if (dataCollector.length < 23 && arrNextDay) {
                let extraData = 24 - dataCollector.length

                for (let i = 0; i < extraData; i++) {
                    let newHourData = {
                        time: arrNextDay[i].time.slice(11, 16),
                        temp_c: arrNextDay[i].temp_c,
                        is_day: arrNextDay[i].is_day,
                        condition: arrNextDay[i].condition,
                        wind_kph: arrNextDay[i].wind_kph,
                        humidity: arrNextDay[i].humidity,
                        chance_of_rain: arrNextDay[i].chance_of_rain,
                    }

                    dataCollector.push(newHourData)
                }
            }

            dataCollector[0].time = "Agora"
            setHoursData(dataCollector)
        }
    }, [data])

    return (
        <S.HoursList className='fadeIn'>
            <Carousel responsive={responsive}>
                {hoursData.map((item, index) => (
                    <S.HoursListItem key={index}>
                        <span className='time'>{item.time}</span>
                        <span className='hourTemperature'>{item.temp_c}°C</span>
                        <img className='weatherIcon' src={weatherIcon(item.is_day, item.condition.code)} alt="Ícone do tempo" />
                        <div className="infoContainer">
                            <span className='hourInfo'>Umidade: {item.humidity}%</span>
                            <span className='hourInfo'>Chuva: {item.chance_of_rain}%</span>
                            <span className='hourInfo'>Vento: {item.wind_kph}km/h</span>
                        </div>
                    </S.HoursListItem>
                ))}
            </Carousel>
        </S.HoursList>
    )
}

export default HoursCard