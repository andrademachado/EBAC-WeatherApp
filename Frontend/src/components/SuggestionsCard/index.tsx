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

    const getUmbrellaRecommendation = (data: WeatherProps) => {

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
    }

    const getClothingRecommendation = (data: WeatherProps) => {

        const temperature = data.current.temp_c

        if (temperature > 20) {
            setDotColor(prevState => ({
                ...prevState,
                clothing: palette.yellow
            }))
            setRecommendation(prevState => ({
                ...prevState,
                clothing: "Roupas leves"
            }))
            return
        } else if (temperature > 10) {
            setDotColor(prevState => ({
                ...prevState,
                clothing: palette.blue
            }))
            setRecommendation(prevState => ({
                ...prevState,
                clothing: "Casaco leve"
            }))
            return
        } else {
            setDotColor(prevState => ({
                ...prevState,
                clothing: palette.blue
            }))
            setRecommendation(prevState => ({
                ...prevState,
                clothing: "Casaco grosso"
            }))
            return
        }
    }

    const getDrivingSafetySuggestion = (weather: WeatherProps) => {
        const veryBadConditions = [1117, 1135, 1147, 1279, 1282];
        const badConditions = [
            1063, 1087, 1114, 1168, 1171, 1186, 1189, 1192, 1195, 1201, 1243, 1246, 1276
        ];
        const mediumConditions = [
            1066, 1069, 1072, 1150, 1153, 1180, 1183, 1204, 1207, 1210, 1213, 1216, 1219,
            1222, 1225, 1237, 1240, 1249, 1252, 1255, 1258, 1261, 1264, 1273
        ];

        const { precip_mm, vis_km, wind_kph, gust_kph, condition } = weather.current
        const conditionCode = condition.code;

        if (
            precip_mm > 20 ||
            vis_km < 0.2 ||
            wind_kph > 50 ||
            veryBadConditions.includes(conditionCode) ||
            gust_kph > 50
        ) {
            setDotColor(prevState => ({
                ...prevState,
                traffic: palette.red
            }))
            setRecommendation(prevState => ({
                ...prevState,
                traffic: "Muito ruim"
            }))
            return
        } else if (
            precip_mm > 10 ||
            vis_km < 0.5 ||
            wind_kph > 30 ||
            badConditions.includes(conditionCode) ||
            gust_kph > 30
        ) {
            setDotColor(prevState => ({
                ...prevState,
                traffic: palette.red
            }))
            setRecommendation(prevState => ({
                ...prevState,
                traffic: "Ruim"
            }))
            return
        } else if (
            precip_mm > 2 ||
            vis_km < 1 ||
            wind_kph > 15 ||
            mediumConditions.includes(conditionCode)
        ) {
            setDotColor(prevState => ({
                ...prevState,
                traffic: palette.yellow
            }))
            setRecommendation(prevState => ({
                ...prevState,
                traffic: "Razoável"
            }))
            return
        } else if (
            precip_mm < 2 ||
            vis_km < 2 ||
            wind_kph < 15
        ) {
            setDotColor(prevState => ({
                ...prevState,
                traffic: palette.green
            }))
            setRecommendation(prevState => ({
                ...prevState,
                traffic: "Bom"
            }))
            return
        } else {
            setDotColor(prevState => ({
                ...prevState,
                traffic: palette.green
            }))
            setRecommendation(prevState => ({
                ...prevState,
                traffic: "Ótimo"
            }))
            return
        }
    };

    const getWalkingCondition = (data: WeatherProps) => {
        const { temp_c, precip_mm, vis_km, wind_kph, air_quality } = data.current

        if (
            precip_mm > 5 ||
            vis_km < 1 ||
            wind_kph > 40 ||
            temp_c < 0 ||
            temp_c > 35 ||
            air_quality['us-epa-index'] > 3
        ) {
            setDotColor(prevState => ({
                ...prevState,
                outdoors: palette.red
            }))
            setRecommendation(prevState => ({
                ...prevState,
                outdoors: "Muito ruim"
            }))
            return
        } else if (
            precip_mm > 1 ||
            (vis_km >= 1 && vis_km <= 3) ||
            (wind_kph > 20 && wind_kph <= 40) ||
            (temp_c >= 0 && temp_c <= 10) ||
            (temp_c >= 30 && temp_c <= 35) ||
            air_quality['us-epa-index'] > 2
        ) {
            setDotColor(prevState => ({
                ...prevState,
                outdoors: palette.red
            }))
            setRecommendation(prevState => ({
                ...prevState,
                outdoors: "Ruim"
            }))
            return
        } else if (
            precip_mm < 1 &&
            vis_km > 3 &&
            wind_kph > 10 &&
            wind_kph <= 20 &&
            temp_c > 10 &&
            temp_c < 30 &&
            air_quality['us-epa-index'] <= 2
        ) {
            setDotColor(prevState => ({
                ...prevState,
                outdoors: palette.yellow
            }))
            setRecommendation(prevState => ({
                ...prevState,
                outdoors: "Razoável"
            }))
            return
        } else if (
            precip_mm === 0 &&
            vis_km > 5 &&
            wind_kph > 5 &&
            wind_kph <= 10 &&
            temp_c >= 15 &&
            temp_c <= 25 &&
            air_quality['us-epa-index'] <= 1
        ) {
            setDotColor(prevState => ({
                ...prevState,
                outdoors: palette.green
            }))
            setRecommendation(prevState => ({
                ...prevState,
                outdoors: "Bom"
            }))
            return
        } else if (
            precip_mm === 0 &&
            vis_km > 10 &&
            wind_kph < 5 &&
            temp_c >= 20 &&
            temp_c <= 25 &&
            air_quality['us-epa-index'] === 1
        ) {
            setDotColor(prevState => ({
                ...prevState,
                outdoors: palette.green
            }))
            setRecommendation(prevState => ({
                ...prevState,
                outdoors: "Ótimo"
            }))
            return
        }

        setDotColor(prevState => ({
            ...prevState,
            outdoors: palette.yellow
        }))
        setRecommendation(prevState => ({
            ...prevState,
            outdoors: "Razoável"
        }))
        return
    }

    useEffect(() => {
        if (!data) return

        getUmbrellaRecommendation(data)
        getClothingRecommendation(data)
        getDrivingSafetySuggestion(data)
        getWalkingCondition(data)

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
