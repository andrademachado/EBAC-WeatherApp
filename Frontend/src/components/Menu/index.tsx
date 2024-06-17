import * as S from './styles'

type Props = {
    toggleMenu: (state: boolean) => void
}

const Menu = ({ toggleMenu }: Props) => {

    return (
        <S.Menu>
            <div className='closeMenu'>
                <span className='closeMenuBtn' onClick={() => toggleMenu(false)}>X</span>
            </div>
            <ul>
                <li>
                    Previsão
                </li>
                <li>
                    Sobre nós
                </li>
                <li className='noBorder'>
                    Legendas
                </li>
            </ul>
        </S.Menu>
    )
}

export default Menu