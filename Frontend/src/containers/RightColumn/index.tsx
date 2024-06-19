import { useState } from 'react'

import MapComponent from '../../components/MapComponent'
import SuggestionsCard from '../../components/SuggestionsCard'

import * as S from './styles'

import map from '../../assets/map-full.webp'

const RightColumn = () => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <S.RightColumn className='column'>
            {openModal && (
                <S.FullScreen className='fastFadeIn'>
                    <div className="overlay" onClick={() => setOpenModal(false)}></div>
                    <div className="mapModal">
                        <MapComponent />
                    </div>
                </S.FullScreen>
            )}
            <S.Map
                onClick={() => setOpenModal(true)}
                className='fastFadeIn smallCard'
                style={{ backgroundImage: `url(${map})` }}
            >
                <div className="mapBanner">
                    Abrir mapa
                </div>
            </S.Map>
            <SuggestionsCard />
        </S.RightColumn>
    )
}

export default RightColumn