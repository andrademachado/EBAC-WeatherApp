import * as S from './styles'

import pin from '../../assets/ion_location-sharp.png'
import map from '../../assets/Mapa.png'

const SectionCurrent = () => {
    return (
        <section>
            <S.City>
                <img src={pin} alt="Pin icon" />
                <span>
                    Santa Cruz do Sul, Rio Grande do Sul
                </span>
            </S.City>
            <div className="section">
                <div className='card'>
                    
                </div>
                <S.Map>
                    <img src={map} alt="" />
                </S.Map>
            </div>
        </section>
    )
}

export default SectionCurrent
