import * as S from './styles'
import logo from '../../assets/EBACLIMA2.png'
import botao from '../../assets/botao.png'
import apoio from '../../assets/Apoio_ EBAC.png'

const Footer = () => {
    return (
        <S.Footer>
            <div className='containerUp'>
                <div className='logo'>
                    <img src={logo} />

                </div>
                <section className='item' >                   
                    <ul className='footerList'>
                        <li>Previsão</li>
                        <li>Sobre nós</li>
                    </ul>
                </section>
                <div className='logo'></div>
                
            </div>
            <S.Center>
                <div className='containerCenter'>
                    <div className='suport'  >
                        <h4>E-mail</h4>
                        <span><a href=""><h3>suporte@alfateam.com.br</h3></a></span>
                    </div>
                </div>
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
            </S.Center>
            <S.Low>
                <div className='containerLow'>
                    <a href="">
                        <img src={botao} alt="logo da equipe sobre nós" />
                    </a>
                    <a href="" >
                        <img src={apoio} alt="Logo de Apoio da Ebac" />
                    </a>
                </div>
            </S.Low>
        </S.Footer>
    )
}
export default Footer