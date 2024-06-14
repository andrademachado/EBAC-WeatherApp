import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { useGetNewLocationQuery } from '../../services/api'

import * as S from './styles'

import sun from '../../assets/astro-sun.png'
import moon from '../../assets/astro-moon.png'

const Astro = () => {

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    const [sunValue, setSunValue] = useState<string>("")
    const [moonValue, setMoonValue] = useState<string>("13")

    const timeConvertion = [
        { am: "01", pm: "13" },
        { am: "02", pm: "14" },
        { am: "03", pm: "15" },
        { am: "04", pm: "16" },
        { am: "05", pm: "17" },
        { am: "06", pm: "18" },
        { am: "07", pm: "19" },
        { am: "08", pm: "20" },
        { am: "09", pm: "21" },
        { am: "10", pm: "22" },
        { am: "11", pm: "23" },
        { am: "12", pm: "12" }
    ]

    const handleTime = (time: string | undefined) => {
        const amOrPm = time?.slice(6, 8)
        const firstDigits = time?.slice(0, 2)
        const timeFormat = time?.slice(0, 5)

        if (time === "No moonset") return "---"

        if (amOrPm === "PM") {
            for (const entry of timeConvertion) {
                if (entry.am === firstDigits) {
                    return timeFormat?.replace(entry.am, entry.pm)
                }
            }
        } else {
            return time?.slice(0, 5)
        }
    }

    const timeToMinutes = (time: string) => {
        const [hours, minutes] = time.split(':').map(Number)
        return hours * 60 + minutes
    }

    useEffect(() => {

        if (!data) return

        const sunRise = String(handleTime(data.forecast.forecastday[0].astro.sunrise))
        const sunSet = String(handleTime(data.forecast.forecastday[0].astro.sunset))
        const currentTime = data?.current.last_updated.slice(11, 16)

        // Convert timeStart, timeEnd, and currentTime to minutes
        const sunStartMinutes = timeToMinutes(sunRise)
        const sunEndMinutes = timeToMinutes(sunSet)
        const currentMinutes = timeToMinutes(currentTime)

        // Calculate the total duration and the elapsed duration
        const sunTotalDuration = sunEndMinutes - sunStartMinutes
        const sunElapsedDuration = currentMinutes - sunStartMinutes

        // Calculate the percentage of the period that has passed
        const sunPercentagePassed = (sunElapsedDuration / sunTotalDuration) * 100 / 2

        if (sunPercentagePassed < 0) {
            setSunValue("0")
        } else if (sunPercentagePassed > 50) {
            setSunValue("50")
        } else {
            setSunValue(`${Math.ceil(sunPercentagePassed)}`)
        }

        /* console.log(`Percentage of the period that has passed: ${sunPercentagePassed.toFixed(2)}%`) */

    }, [data])

    return (
        <S.AstroContainer className='fadeIn'>
            <S.SunContainer>
                <S.AstroTitle>
                    <img src={sun} alt="Ícone Sol" />
                    <span>Sol</span>
                </S.AstroTitle>
                <S.AstroDataContainer>
                    <div className="astroParent">
                        <div className="astroLine">
                            <div
                                className="pie"
                                style={{ '--p': '50', '--c': '#C7C8CC', '--b': '1px', '--w': '212px' } as React.CSSProperties}
                            ></div>
                        </div>
                        <div className="astroLine">
                            <div
                                className="pie animate"
                                style={{ '--p': `${sunValue}`, '--c': '#F6C833', '--b': '3px', '--w': '212px' } as React.CSSProperties}
                            ></div>
                        </div>
                    </div>
                </S.AstroDataContainer>
                <S.AstroApiData style={{ padding: `0 50px 0 30px` }}>
                    <div className='astroHour'>
                        <span className='astroTxt'>Nascer do Sol</span>
                        <span className='astroTime'>{handleTime(data?.forecast.forecastday[0].astro.sunrise)}</span>
                    </div>
                    <div className='astroHour'>
                        <span className='astroTxt'>Pôr do Sol</span>
                        <span className='astroTime'>{handleTime(data?.forecast.forecastday[0].astro.sunset)}</span>
                    </div>
                </S.AstroApiData>
            </S.SunContainer>
            <S.MoonContainer>
                <S.AstroTitle>
                    <img src={moon} alt="Ícone Lua" />
                    <span>Lua</span>
                </S.AstroTitle>
                <S.AstroDataContainer>
                    <S.AstroDataContainer>
                        <div className="astroParent">
                            <div className="astroLine">
                                <div
                                    className="pie"
                                    style={{ '--p': '50', '--c': '#C7C8CC', '--b': '1px', '--w': '212px' } as React.CSSProperties}
                                ></div>
                            </div>
                            <div className="astroLine">
                                <div
                                    className="pie animate"
                                    style={{ '--p': `${moonValue}`, '--c': '#818FB4', '--b': '3px', '--w': '212px' } as React.CSSProperties}
                                ></div>
                            </div>
                        </div>
                    </S.AstroDataContainer>
                    <S.AstroApiData style={{ padding: `0 36px 0 58px` }}>
                        <div className='astroHour'>
                            <span className='astroTxt'>Nascer da Lua</span>
                            <span className='astroTime'>{handleTime(data?.forecast.forecastday[0].astro.moonrise)}</span>
                        </div>
                        <div className='astroHour'>
                            <span className='astroTxt'>Pôr da Lua</span>
                            <span className='astroTime'>{handleTime(data?.forecast.forecastday[0].astro.moonset)}</span>
                        </div>
                    </S.AstroApiData>
                </S.AstroDataContainer>
            </S.MoonContainer>
        </S.AstroContainer>
    )
}

export default Astro
