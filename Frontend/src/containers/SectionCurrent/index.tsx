import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useGetNewLocationQuery } from '../../services/api'
import { RootReducer } from '../../store'

import * as S from './styles'

import pin from '../../assets/ion_location-sharp.png'
import map from '../../assets/Mapa.png'
import CurrentCard from '../../components/CurrentCard'
import CurrentCardMore from '../../components/CurrentCardMore'

const SectionCurrent = () => {

    const [MoreInfo, setMoreInfo] = useState(false)

    const toggleInfo = (state: boolean) => {
        setMoreInfo(state)
    }

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    return (
        <section>
            <S.City>
                <img src={pin} alt="Pin icon" />
                <span>
                    {data?.location.name}, {data?.location.region}
                </span>
            </S.City>
            <div className="section">
                {!MoreInfo ? <CurrentCard toggleInfo={toggleInfo} /> : <CurrentCardMore toggleInfo={toggleInfo} />}
                <S.Map>
                    <img src={map} alt="" />
                </S.Map>
            </div>
        </section>
    )
}

export default SectionCurrent
