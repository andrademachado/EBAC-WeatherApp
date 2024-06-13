import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useGetNewLocationQuery } from '../../services/api'
import { RootReducer } from '../../store'
import CurrentCard from '../../components/CurrentCard'
import CurrentCardMore from '../../components/CurrentCardMore'
import MapComponent from '../../components/MapComponent'

import * as S from './styles'

import pin from '../../assets/ion_location-sharp.png'
import map from '../../assets/map-full.webp'

type LocationNameProps = {
    locality: string
    principalSubdivision: string
}

const SectionCurrent = () => {

    const [locationName, setLocationName] = useState<LocationNameProps>()

    const [MoreInfo, setMoreInfo] = useState(false)

    const [openModal, setOpenModal] = useState(false)

    const toggleInfo = (state: boolean) => {
        setMoreInfo(state)
    }

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    useEffect(() => {
        if (data) {
            const { lat, lon } = data.location
            fetch(`https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}&localityLanguage=pt&key=bdc_de4cc3d6a87f4c92a9be08450762b9df`)
                .then((res) => res.json())
                .then((res) => setLocationName(res))
                .catch((error) => console.error('Error fetching location name:', error))
        }
    }, [data])

    return (
        <>
            {openModal && (
                <S.FullScreen className='fastFadeIn'>
                    <div className="overlay" onClick={() => setOpenModal(false)}></div>
                    <div className="mapModal">
                        <MapComponent />
                    </div>
                </S.FullScreen>
            )}
            <section>
                <S.City className={locationName ? "isVisible fadeIn" : "hide fadeIn"}>
                    <img src={pin} alt="Pin icon" />
                    {locationName?.locality ? (
                        <span>{locationName?.locality}, {locationName?.principalSubdivision}</span>
                    ) : (
                        <span>{data?.location.name}, {data?.location.region}</span>
                    )}
                </S.City>
                <div className="section">
                    {!MoreInfo ? <CurrentCard toggleInfo={toggleInfo} /> : <CurrentCardMore toggleInfo={toggleInfo} />}
                    <S.Map
                        onClick={() => setOpenModal(true)}
                        className='fastFadeIn smallCard'
                        style={{ backgroundImage: `url(${map})` }}
                    >
                    </S.Map>
                </div>
            </section>
        </>
    )
}

export default SectionCurrent
