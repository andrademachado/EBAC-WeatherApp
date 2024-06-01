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
            when: "Agora",
            temperature: "14°",
            icon: weatherIcon,
            percentage: "2%"
        },
        {
            when: "Agora",
            temperature: "14°",
            icon: weatherIcon,
            percentage: "2%"
        },
        {
            when: "Agora",
            temperature: "14°",
            icon: weatherIcon,
            percentage: "2%"
        },
        {
            when: "Agora",
            temperature: "14°",
            icon: weatherIcon,
            percentage: "2%"
        },
        {
            when: "Agora",
            temperature: "14°",
            icon: weatherIcon,
            percentage: "2%"
        },
        {
            when: "Agora",
            temperature: "14°",
            icon: weatherIcon,
            percentage: "2%"
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