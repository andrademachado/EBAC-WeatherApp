import { useState } from 'react'

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

    return (
        <section>
            <S.City>
                <img src={pin} alt="Pin icon" />
                <span>
                    Santa Cruz do Sul, Rio Grande do Sul
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
