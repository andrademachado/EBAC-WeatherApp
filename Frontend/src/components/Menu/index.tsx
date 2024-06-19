import * as S from './styles'

import iconClose from '../../assets/icon_close.png'

type Props = {
    toggleMenu: (state: boolean) => void
}

const Menu = ({ toggleMenu }: Props) => {

    return (
        <S.Menu>
            <div className='closeMenu'>
                <span className='closeMenuBtn' onClick={() => toggleMenu(false)}>
                    <img src={iconClose} alt="Botão de fechar" />
                </span>
            </div>
            <ul>
                <li>
                    Previsão
                </li>
                <li>
                    Legendas
                </li>
                <li className='noBorder'>
                    Sobre nós
                </li>
            </ul>
        </S.Menu>
    )
}

export default Menu