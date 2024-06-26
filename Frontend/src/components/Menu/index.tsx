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
                    <S.MenuLink to="/">Previsão</S.MenuLink>
                </li>
                <li className='noBorder'>
                    <S.MenuLink to="/sobre">Sobre nós</S.MenuLink>
                </li>
            </ul>
        </S.Menu>
    )
}

export default Menu