import { useSelector } from 'react-redux'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { RootReducer } from '../../store'
import { useGetNewLocationQuery } from '../../services/api'
import { weatherIcon } from '../../utils/icons'

import * as S from './styles'

import tempIcon from '../../assets/weather-icon.png'

const HoursCard = () => {

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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

    const hoursData = [
        {
            when: "Agora",
            temperature: data?.current.temp_c,
            icon: weatherIcon(data?.current.is_day, data?.current.condition.code),
            percentage: data?.current.humidity
        },
        {
            when: "11:00",
            temperature: "15",
            icon: tempIcon,
            percentage: "2"
        },
        {
            when: "12:00",
            temperature: "16",
            icon: tempIcon,
            percentage: "1"
        },
        {
            when: "13:00",
            temperature: "16",
            icon: tempIcon,
            percentage: "1"
        },
        {
            when: "14:00",
            temperature: "16",
            icon: tempIcon,
            percentage: "1"
        },
        {
            when: "15:00",
            temperature: "16",
            icon: tempIcon,
            percentage: "1"
        },
        {
            when: "16:00",
            temperature: "16",
            icon: tempIcon,
            percentage: "1"
        }
    ]

    return (
        <S.HoursList className='fadeIn'>
            <Carousel responsive={responsive}>
                {hoursData.map((item, index) => (
                    <S.HoursListItem key={index}>
                        <span className='time'>{item.when}</span>
                        <span className='hourTemperature'>{item.temperature}°</span>
                        <img className='weatherIcon' src={item.icon} alt="" />
                        <div className="infoContainer">
                            <span className='hourInfo'>Umidade: {item.percentage}%</span>
                            <span className='hourInfo'>Chuva: {item.percentage}%</span>
                            <span className='hourInfo'>Vento: {item.percentage}km/h</span>
                        </div>
                    </S.HoursListItem>
                ))}
            </Carousel>
        </S.HoursList>
    )
}

export default HoursCard