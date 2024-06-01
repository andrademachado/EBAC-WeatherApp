import * as S from './styles'

import weatherIcon from '../../assets/weather-icon.png'
import drop from '../../assets/drop.png'

const HoursCard = () => {

    const hoursData = [
        {
            when: "Agora",
            temperature: "14°",
            icon: weatherIcon,
            percentage: "2%"
        },
        {
            when: "11:00",
            temperature: "15°",
            icon: weatherIcon,
            percentage: "2%"
        },
        {
            when: "12:00",
            temperature: "16°",
            icon: weatherIcon,
            percentage: "1%"
        },
        {
            when: "13:00",
            temperature: "16°",
            icon: weatherIcon,
            percentage: "1%"
        },
        {
            when: "14:00",
            temperature: "16°",
            icon: weatherIcon,
            percentage: "1%"
        },
        {
            when: "15:00",
            temperature: "16°",
            icon: weatherIcon,
            percentage: "1%"
        },
        {
            when: "16:00",
            temperature: "16°",
            icon: weatherIcon,
            percentage: "1%"
        }
    ]

    return (
        <S.HoursList className='fadeIn'>
            {hoursData.map((item, index) => (
                <S.HoursListItem key={index}>
                    <span className='time'>{item.when}</span>
                    <span className='hourTemperature'>{item.temperature}</span>
                    <img className='weatherIcon' src={item.icon} alt="" />
                    <div className="dropContainer">
                        <img src={drop} alt="Icone gota" />
                        <span className='hourPercentage'>{item.percentage}</span>
                    </div>
                </S.HoursListItem>
            ))}
        </S.HoursList>
    )
}

export default HoursCard