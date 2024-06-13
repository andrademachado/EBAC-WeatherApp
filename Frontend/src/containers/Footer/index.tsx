import * as S from './styles'
import logo from '../../assets/logo.png'
import botao from '../../assets/botao.png'
import apoio from  '../../assets/Apoio_ EBAC.png'


const Footer = () => {
    return (
        <S.Footer>
            <S.FooterLogo className='logo' >
                <img src={logo} />
            </S.FooterLogo >
            <S.List className='information'>
                <div>
                    <S.About>
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
                        <li>
                            <h4>sobre nós</h4>
                        </li>
                    </S.About>
                    <div className='button'>
                        <a href="">
                            <img src={botao} alt="logo da equipe sobre nós" />
                        </a>
                        <a href="">
                            <img src={apoio} alt="Logo de Apoio da Ebac" />
                        </a>
                    </div>
                </div>
            </S.List>
            <S.Icon>
                <ul className='social-links'>
                    <li>
                        <a href="">
                            <img src="https://placehold.it/30x29" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://placehold.it/30x29" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://placehold.it/30x29" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://placehold.it/30x29" alt="" />
                        </a>
                    </li>
                </ul>
            </S.Icon>
        </S.Footer>
    )
}

export default Footer
