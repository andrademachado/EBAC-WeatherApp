import { useState } from 'react'

import HoursCard from '../../components/HoursCard'

import * as S from './styles'
import SuggestionsCard from '../../components/SuggestionsCard'

const SectionHours = () => {

    const [astroIsOpen, setAstroIsOpen] = useState(false)

    return (
        <S.SectionHours className="section">
            <div className="card cardHeightB">
                <S.HoursContainer className="fadeIn">
                    <S.HoursCardBtn onClick={() => setAstroIsOpen(false)} className={astroIsOpen ? '' : 'isSelected'}>De hora em hora</S.HoursCardBtn>
                    <S.HoursCardBtn onClick={() => setAstroIsOpen(true)} className={astroIsOpen ? 'isSelected' : ''}>Sol e Lua</S.HoursCardBtn>
                    {!astroIsOpen ? (
                        <HoursCard />
                    ) : (
                        <p>astro</p>
                    )}
                </S.HoursContainer>
            </div>
            <SuggestionsCard />
        </S.SectionHours>
    )
}

export default SectionHours