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
                    {/*Esse h3 deverá ser substituído por url nas uls abaixo */}
                    <h2 className='itemA'>Previsão</h2>
                    <h2 className='itemB'>Legenda</h2>
                    <h2 className='itemC'>Sobre nós</h2>
                    <ul className='list'>
                        <li>
                            <h3 ></h3>
                        </li>
                        <li>
                            <h3 > </h3>
                        </li>
                        <li>
                            <h3></h3>
                        </li>
                    </ul>
                </section>
            </div>
            <S.Center>
                <div className='containerCenter'>
                    <div className='suport'  >
                        <h4>E-mail</h4>
                        <ul >
                            <li className='contact'>
                                <a href=""><h3>suporte@alfateam.com.br</h3> </a>
                            </li>
                        </ul>
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
                    <a href="" className='logoLow'>
                        <img src={botao} alt="logo da equipe sobre nós" />
                    </a>
                    <a href="" className='icon'>
                        <img src={apoio} alt="Logo de Apoio da Ebac" />
                    </a>
                </div>
            </S.Low>
        </S.Footer>
    )
}
export default Footer