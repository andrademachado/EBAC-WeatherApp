import NavPages from '../../components/NavPages'

import * as S from './styles'

import dudu from '../../assets/profile-dudu.webp'
import duduGrad from '../../assets/profile-dudu-grad.webp'
import victor from '../../assets/profile-victor.webp'
import victorGrad from '../../assets/profile-victor-grad.webp'
import shay from '../../assets/profile-shay.webp'
import shayGrad from '../../assets/profile-shay-grad.webp'
import fernanda from '../../assets/profile-fernanda.webp'
import fernandaGrad from '../../assets/profile-fernanda-grad.webp'
import ligia from '../../assets/profile-ligia.webp'
import ligiaGrad from '../../assets/profile-ligia-grad.webp'
import marco from '../../assets/profile-marco.webp'
import marcoGrad from '../../assets/profile-marco-grad.webp'
import behance from '../../assets/lg-behance.svg'
import github from '../../assets/lg-behance.svg'
import internet from '../../assets/lg-internet.svg'
import linkedin from '../../assets/lg-linkedin.svg'
import whatsapp from '../../assets/lg-whatsapp.svg'

const About = () => {
    return (
        <S.Div>
            <main>
                <NavPages
                    txtOne="Previsão"
                    linkOne="/"
                    txtTwo="Sobre nós"
                    linkTwo="/sobre"
                />

                <h1>Sobre nós</h1>

                <h2>
                    Conheça um pouco mais sobre a equipe que criou esse aplicativo
                    maravilhoso.
                </h2>

                <section id="grid-cards">{/*<!-- Eduardo -->*/}
                    <div className="card">
                        <img
                            src={dudu}
                            alt="Eduardo Strugulski"
                            className="img-clean"
                        />
                        <img
                            src={duduGrad}
                            alt="Eduardo Strugulski"
                            className="img-grad"
                        />
                        <div className="card-content">
                            <h2 className="name">Eduardo Strugulski</h2>
                            <h2 className="function">UX/UI</h2>
                            <p>
                                <span className="tag">Wireframing</span>
                                <span className="tag">Figma</span>
                                <span className="tag">Design Thinking</span>
                                <span className="tag">Prototipagem</span>
                            </p>
                            <div className="icons">
                                <a
                                    target="_blank"
                                    href="https://www.behance.net/edustrugulski"
                                    className="icon-behance"
                                >
                                    <img src={behance} alt="icon behance" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/strugulski/"
                                    className="icon-linkedin"
                                >
                                    <img src={linkedin} alt="icon linkedin" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://wa.me/5551996074051"
                                    className="icon-whatsapp"
                                >
                                    <img src={whatsapp} alt="icon whatsapp" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card"> {/*<!-- Victor -->*/}

                        <img
                            src={victor}
                            alt="Victor Oliveira"
                            className="img-clean"
                        />
                        <img
                            src={victorGrad}
                            alt="Victor Oliveira"
                            className="img-grad"
                        />
                        <div className="card-content">
                            <h2 className="name">Victor Oliveira</h2>
                            <h2 className="function">Front-end</h2>
                            <p>
                                <span className="tag">React</span>
                                <span className="tag">Typescript</span>
                                <span className="tag">Redux</span>
                                <span className="tag">API</span>
                                <span className="tag">JS</span>
                                <span className="tag">Styled Components</span>
                            </p>
                            <div className="icons">
                                <a
                                    target="_blank"
                                    href="https://victoroliveira.vercel.app/"
                                    className="icon-github"
                                >
                                    <img src={internet} alt="icon github" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/victor-fo/"
                                    className="icon-linkedin"
                                >
                                    <img src={linkedin} alt="icon linkedin" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://wa.me/5582993983428"
                                    className="icon-whatsapp"
                                >
                                    <img src={whatsapp} alt="icon whatsapp" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card">{/*<!-- Shay -->*/}

                        <img
                            src={shay}
                            alt="Shay Cannon"
                            className="img-clean"
                        />
                        <img
                            src={shayGrad}
                            alt="Shay Cannon"
                            className="img-grad"
                        />
                        <div className="card-content">
                            <h2 className="name">Shay Cannon</h2>
                            <h2 className="function">UX/UI</h2>
                            <p>
                                <span className="tag">Design Thinking</span>
                                <span className="tag">Usabilidade</span>
                                <span className="tag">Figma</span>
                                <span className="tag">Prototipagem</span>
                            </p>
                            <div className="icons">
                                <a
                                    target="_blank"
                                    href="https://www.behance.net/shaycannon"
                                    className="icon-behance"
                                >
                                    <img src={behance} alt="icon behance" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/shaycannon/"
                                    className="icon-linkedin"
                                >
                                    <img src={linkedin} alt="icon linkedin" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://wa.me/5521971443006"
                                    className="icon-whatsapp"
                                >
                                    <img src={whatsapp} alt="icon whatsapp" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card"> {/*  < !--Fernanda -->*/}

                        <img
                            src={fernanda}
                            alt="Fernanda Borges"
                            className="img-clean"
                        />
                        <img
                            src={fernandaGrad}
                            alt="Fernanda Borges"
                            className="img-grad"
                        />
                        <div className="card-content">
                            <h2 className="name">Fernanda Borges</h2>
                            <h2 className="function">Product Owner</h2>
                            <p>
                                <span className="tag">SCRUM</span>
                                <span className="tag">Gerenc. Backlog</span>
                                <span className="tag">User Story</span>
                            </p>
                            <div className="icons">
                                <a target="_blank" href="" className="icon-behance">
                                    <img src={behance} alt="icon behance" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/fernandaborgesborges"
                                    className="icon-linkedin"
                                >
                                    <img src={linkedin} alt="icon linkedin" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://wa.me/5511973756354"
                                    className="icon-whatsapp"
                                >
                                    <img src={whatsapp} alt="icon whatsapp" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card"> { /*< !--Ligia -->*/}

                        <img
                            src={ligia}
                            alt="Lígia Andrade"
                            className="img-clean"
                        />
                        <img
                            src={ligiaGrad}
                            alt="Lígia Andrade"
                            className="img-grad"
                        />
                        <div className="card-content">
                            <h2 className="name">Lígia Andrade</h2>
                            <h2 className="function">Fullstack</h2>
                            <p>
                                <span className="tag">React</span>
                                <span className="tag">Typescript</span>
                                <span className="tag">Redux</span>
                                <span className="tag">API</span>
                                <span className="tag">JS</span>
                                <span className="tag">Styled Components</span>
                            </p>
                            <div className="icons">
                                <a
                                    target="_blank"
                                    href="https://pagina-pessoal-peach.vercel.app/"
                                    className="icon-github"
                                >
                                    <img src={internet} alt="icon internet" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/lígia-andrade-de-paula"
                                    className="icon-linkedin"
                                >
                                    <img src={linkedin} alt="icon linkedin" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://wa.me/5574999230602"
                                    className="icon-whatsapp"
                                >
                                    <img src={whatsapp} alt="icon whatsapp" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card"> {/* < !--Marco--> */}

                        <img
                            src={marco}
                            alt="Marco de Sousa"
                            className="img-clean"
                        />
                        <img
                            src={marcoGrad}
                            alt="Marco de Sousa"
                            className="img-grad"
                        />
                        <div className="card-content">
                            <h2 className="name">Marco de Sousa</h2>
                            <h2 className="function">Fullstack</h2>
                            <p>
                                <span className="tag">Web Dev.</span>
                                <span className="tag">API</span>
                                <span className="tag">CSS</span>
                                <span className="tag">Javascript</span>
                                <span className="tag">React</span>
                                <span className="tag">Escrita Técnica</span>
                            </p>
                            <div className="icons">
                                <a
                                    target="_blank"
                                    href="https://github.com/Marco-D-Sousa"
                                    className="icon-github"
                                >
                                    <img src={github} alt="icon github" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/marko-de-sousa/"
                                    className="icon-linkedin"
                                >
                                    <img src={linkedin} alt="icon linkedin" />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://wa.me/4917675406365"
                                    className="icon-whatsapp"
                                >
                                    <img src={whatsapp} alt="contato Whatsapp" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </S.Div>
    )
}

export default About
