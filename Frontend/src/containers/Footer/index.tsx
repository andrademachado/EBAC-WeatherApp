import * as S from './styles'
import logo from '../../assets/logo.png'
import botao from '../../assets/botao.png'
import Ebac from '../../assets/Ebac.png'


const  Footer  = () => {
    return (
        <S.Footer>
            <div className='logo' >
                <img src={logo} />
            </div>
            <div className='list'>
                <li>
                    <h4>sobre nós</h4>
                </li>
                <li>
                    <h4>sobre nós</h4>
                </li>
                <li>
                    <h4>sobre nós</h4>
                </li>
                <li>
                    <h4>sobre nós</h4>
                </li>
                <li>
                    <h4>sobre nós</h4>
                </li>
            </div>
            <div>
                <img src="https://placehold.it/36x36" alt="rede social" />
                <img src="https://placehold.it/36x36" alt="rede social" />
                <img src="https://placehold.it/36x36" alt="rede social" />
                <img src="https://placehold.it/36x36" alt="rede social" />
            </div>
            <div>
                <img src={botao} alt="logo da equipe sobre nós" />
            </div>
            <div>
                <img src={Ebac} alt="Logo de Apoio da Ebac" />
            </div>
        </S.Footer>
    )
}

export default Footer
