import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { useGetNewLocationQuery } from '../../services/api'
import LoadCardC from '../../loaders/LoadCardC'

import * as S from './styles'

import umbrella from '../../assets/umbrella.png'
import car from '../../assets/car.png'
import clothing from '../../assets/clothing.png'
import thermometer from '../../assets/thermometer.png'
import visibilityIcon from '../../assets/visibility.png'
import walk from '../../assets/walk.png'

type RecommendationProps = {
    umbrella: string
    traffic: string
    clothing: string
    sun: string
    visibility: string
    outdoors: string
}

const SuggestionsCard = () => {

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    const [dotColor, setDotColor] = useState<RecommendationProps>({
        umbrella: "white",
        traffic: "white",
        clothing: "white",
        sun: "white",
        visibility: "white",
        outdoors: "white"
    })

    const [recommendation, setRecommendation] = useState<RecommendationProps>({
        umbrella: "",
        traffic: "",
        clothing: "",
        sun: "",
        visibility: "",
        outdoors: ""
    })

    const palette = {
        red: "#F20519",
        orange: "#EAA900",
        yellow: "#F7EA00",
        green: "#4ECB71",
        blue: "#7587DE"
    }

    useEffect(() => {
        if (!data) return

        const temperature = data.current.temp_c

        // Clothing recommendation
        if (temperature > 20) {
            setDotColor(prevState => ({
                ...prevState,
                clothing: palette.yellow
            }))
            setRecommendation(prevState => ({
                ...prevState,
                clothing: "Roupas leves"
            }))
        } else if (temperature > 10) {
            setDotColor(prevState => ({
                ...prevState,
                clothing: palette.blue
            }))
            setRecommendation(prevState => ({
                ...prevState,
                clothing: "Casaco leve"
            }))
        } else {
            setDotColor(prevState => ({
                ...prevState,
                clothing: palette.blue
            }))
            setRecommendation(prevState => ({
                ...prevState,
                clothing: "Casaco grosso"
            }))
        }

        // Umbrella recommendation
        const currentHour = data.current.last_updated.slice(11, 13)
        const arrHours = data.forecast.forecastday[0].hour
        const extraArr = data.forecast.forecastday[1].hour
        const twoDays: Hour[] = [...arrHours, ...extraArr]

        if (!arrHours) return

        const targetIndex = arrHours.findIndex(entry => entry.time.slice(11, 13) === currentHour)
        if (targetIndex === -1) return

        const finalArr = twoDays.slice(targetIndex)
        
        for (const { chance_of_rain } of finalArr) {
            if (chance_of_rain >= 80) {
                setDotColor(prevState => ({
                    ...prevState,
                    umbrella: palette.orange
                }))
                setRecommendation(prevState => ({
                    ...prevState,
                    umbrella: "Necessário"
                }))
                break
            } else if (chance_of_rain >= 50) {
                setDotColor(prevState => ({
                    ...prevState,
                    umbrella: palette.yellow
                }))
                setRecommendation(prevState => ({
                    ...prevState,
                    umbrella: "Recomendado"
                }))
                break
            } else {
                setDotColor(prevState => ({
                    ...prevState,
                    umbrella: palette.green
                }))
                setRecommendation(prevState => ({
                    ...prevState,
                    umbrella: "Não é necessário"
                }))
                break
            }
        }

        /* for (let i = targetIndex; i < targetIndex + 6; i++) {
            
        } */

    }, [data])

    if (!data) return <LoadCardC />

    return (
        <S.SuggestionsCard className="smallCard cardHeightB">
            <h2>Sugestões para o seu dia</h2>
            <S.SuggestionsList className='fadeIn'>
                <S.SuggestionsItem>
                    <img src={umbrella} alt="ícone guarda chuva" />
                    <div>
                        <h3>Guarda Chuva</h3>
                        <div className='status'>
                            <span style={{ backgroundColor: dotColor.umbrella }}></span>
                            {recommendation.umbrella}
                        </div>
                    </div>
                </S.SuggestionsItem>
                <S.SuggestionsItem>
                    <img src={car} alt="Ícone de Carro" />
                    <div>
                        <h3>Segurança no trânsito</h3>
                        <div className='status'>
                            <span style={{ backgroundColor: dotColor.traffic }}></span>
                            {recommendation.traffic}
                        </div>
                    </div>
                </S.SuggestionsItem>
                <S.SuggestionsItem>
                    <img src={clothing} alt="Ícone de Roupa" />
                    <div>
                        <h3>Roupas</h3>
                        <div className='status'>
                            <span style={{ backgroundColor: dotColor.clothing }}></span>
                            {recommendation.clothing}
                        </div>
                    </div>
                </S.SuggestionsItem>
                <S.SuggestionsItem>
                    <img src={thermometer} alt="Termômetro" />
                    <div>
                        <h3>Insolação</h3>
                        <div className='status'>
                            <span style={{ backgroundColor: dotColor.sun }}></span>
                            {recommendation.sun}
                        </div>
                    </div>
                </S.SuggestionsItem>
                <S.SuggestionsItem>
                    <img src={visibilityIcon} alt="Ícone de visibilidade" />
                    <div>
                        <h3>Visibilidade</h3>
                        <div className='status'>
                            <span style={{ backgroundColor: dotColor.visibility }}></span>
                            {recommendation.visibility}
                        </div>
                    </div>
                </S.SuggestionsItem>
                <S.SuggestionsItem>
                    <img src={walk} alt="Ícone de boneco caminhando" />
                    <div>
                        <h3>Ao ar livre</h3>
                        <div className='status'>
                            <span style={{ backgroundColor: dotColor.outdoors }}></span>
                            {recommendation.outdoors}
                        </div>
                    </div>
                </S.SuggestionsItem>
            </S.SuggestionsList>
        </S.SuggestionsCard>
    )
}

export default SuggestionsCard