import { MenuLink } from '../../styles'

import * as S from './styles'

type Props = {
    txtOne: string
    linkOne: string
    txtTwo: string
    linkTwo: string
}

const NavPages = ({ txtOne, linkOne, txtTwo, linkTwo }: Props) => {
    return (
        <S.NavPages><MenuLink to={linkOne}>{txtOne}</MenuLink> {">"} <MenuLink to={linkTwo}><b>{txtTwo}</b></MenuLink></S.NavPages>
    )
}

export default NavPages
