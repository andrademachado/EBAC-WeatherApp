import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { useGetNewLocationQuery } from '../../services/api'

import * as S from './styles'

import umbrella from '../../assets/umbrella.png'
import car from '../../assets/car.png'
import clothing from '../../assets/clothing.png'
import thermometer from '../../assets/thermometer.png'
import visibility from '../../assets/visibility.png'
import walk from '../../assets/walk.png'
import LoadCardC from '../../loaders/LoadCardC'

const SuggestionsCard = () => {

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    if (!data) return <LoadCardC />

    return (
        <S.SuggestionsCard className="smallCard cardHeightB">
            <h2>Sugestões para o seu dia</h2>
            <S.SuggestionsList className='fadeIn'>
                <S.SuggestionsItem>
                    <img src={umbrella} alt="ícone guarda chuva" />
                    <div>
                        <h3>Guarda Chuva</h3>
                        <div className='status'><span></span>Não é necessário</div>
                    </div>
                </S.SuggestionsItem>
                <S.SuggestionsItem>
                    <img src={car} alt="Ícone de Carro" />
                    <div>
                        <h3>Segurança no trânsito</h3>
                        <div className='status'><span></span>Bom</div>
                    </div>
                </S.SuggestionsItem>
                <S.SuggestionsItem>
                    <img src={clothing} alt="Ícone de Roupa" />
                    <div>
                        <h3>Roupas</h3>
                        <div className='status'><span></span>Casaco leve</div>
                    </div>
                </S.SuggestionsItem>
                <S.SuggestionsItem>
                    <img src={thermometer} alt="Termômetro" />
                    <div>
                        <h3>Insolação</h3>
                        <div className='status'><span></span>Seguro</div>
                    </div>
                </S.SuggestionsItem>
                <S.SuggestionsItem>
                    <img src={visibility} alt="Ícone de visibilidade" />
                    <div>
                        <h3>Visibilidade</h3>
                        <div className='status'><span></span>Boa</div>
                    </div>
                </S.SuggestionsItem>
                <S.SuggestionsItem>
                    <img src={walk} alt="Ícone de boneco caminhando" />
                    <div>
                        <h3>Ao ar livre</h3>
                        <div className='status'><span></span>Bom</div>
                    </div>
                </S.SuggestionsItem>
            </S.SuggestionsList>
        </S.SuggestionsCard>
    )
}

export default SuggestionsCard