import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { useGetNewLocationQuery } from '../../services/api'
import NavPages from '../NavPages'

import * as S from './styles'

import pin from '../../assets/ion_location-sharp.png'

type LocationNameProps = {
    locality: string
    principalSubdivision: string
}

const CityName = () => {

    const [locationName, setLocationName] = useState<LocationNameProps>()

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
        <div>
            <NavPages 
                txtOne="EBAC"
                linkOne="/" 
                txtTwo="Previsão" 
                linkTwo="/" 
            />
            <S.City className={locationName ? "isVisible fadeIn" : "hide fadeIn"}>
                <img src={pin} alt="Pin icon" />
                {locationName?.locality ? (
                    <span>{locationName?.locality}, {locationName?.principalSubdivision}</span>
                ) : (
                    <span>{data?.location.name}, {data?.location.region}</span>
                )}
            </S.City>
        </div>
    )
}

export default CityName
