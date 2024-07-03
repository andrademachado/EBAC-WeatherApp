import * as S from './styles'

import iconClose from '../../assets/icon_close.png'
import { MenuLink } from '../../styles'

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
                    <MenuLink to="/" onClick={() => toggleMenu(false)}>Previsão</MenuLink>
                </li>
                <li className='noBorder'>
                    <MenuLink to="/sobre" onClick={() => toggleMenu(false)}>Sobre nós</MenuLink>
                </li>
            </ul>
        </S.Menu>
    )
}

export default Menu