import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useGetNewLocationQuery } from '../../services/api'
import { RootReducer } from '../../store'
import CurrentCard from '../../components/CurrentCard'
import CurrentCardMore from '../../components/CurrentCardMore'
import HoursCard from '../../components/HoursCard'
import Astro from '../../components/Astro'
import LoadCardB from '../../loaders/LoadCardB'

import * as S from './styles'

const LeftColumn = () => {

    const [MoreInfo, setMoreInfo] = useState(false)

    const [astroIsOpen, setAstroIsOpen] = useState(false)

    const toggleInfo = (state: boolean) => {
        setMoreInfo(state)
    }

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    return (
        <S.LeftColumn className='column'>
            {!MoreInfo ? <CurrentCard toggleInfo={toggleInfo} /> : <CurrentCardMore toggleInfo={toggleInfo} />}
            <div>
                {data ? (
                    <div className="card cardHeightB">
                        <S.HoursContainer className="fadeIn">
                            <S.HoursCardBtn onClick={() => setAstroIsOpen(false)} className={astroIsOpen ? '' : 'isSelected'}>De hora em hora</S.HoursCardBtn>
                            <S.HoursCardBtn onClick={() => setAstroIsOpen(true)} className={astroIsOpen ? 'isSelected' : ''}>Sol e Lua</S.HoursCardBtn>
                            {!astroIsOpen ? (
                                <HoursCard />
                            ) : (
                                <Astro />
                            )}
                        </S.HoursContainer>
                    </div>
                ) : (
                    <LoadCardB />
                )}
            </div>
        </S.LeftColumn >
    )
}

export default LeftColumn