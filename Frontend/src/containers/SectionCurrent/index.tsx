import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useGetNewLocationQuery } from '../../services/api'
import { RootReducer } from '../../store'

import * as S from './styles'

import pin from '../../assets/ion_location-sharp.png'
import CurrentCard from '../../components/CurrentCard'
import CurrentCardMore from '../../components/CurrentCardMore'
import MapComponent from '../../components/MapComponent'
import map from '../../assets/Mapa.png'

const SectionCurrent = () => {

    const [MoreInfo, setMoreInfo] = useState(false)

    const [openModal, setOpenModal] = useState(false)

    const toggleInfo = (state: boolean) => {
        setMoreInfo(state)
    }

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    return (
        <>
            {openModal && (
                <S.FullScreen className='fadeIn'>
                    <div className="overlay" onClick={() => setOpenModal(false)}></div>
                    <div className="mapModal">
                        <MapComponent />
                    </div>
                </S.FullScreen>
            )}
            <section>
                <S.City>
                    <img src={pin} alt="Pin icon" />
                    <span>
                        {data?.location.name}, {data?.location.region}
                    </span>
                </S.City>
                <div className="section">
                    {!MoreInfo ? <CurrentCard toggleInfo={toggleInfo} /> : <CurrentCardMore toggleInfo={toggleInfo} />}
                    <S.Map
                        onClick={() => setOpenModal(true)}
                        className='fastFadeIn'
                        style={{ backgroundImage: `url(${map})` }}
                    >
                    </S.Map>
                </div>
            </section>
        </>
    )
}

export default SectionCurrent
