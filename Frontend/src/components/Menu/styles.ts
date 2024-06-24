import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screen";
import { Link } from "react-router-dom";

export const Menu = styled.menu`
    /* background-color: ${colors.mainBackground}; */
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    width: 283px;
    border-radius: 15px;
    box-shadow: 2px 10px 34px rgba(0, 0, 0, 0.24);
    z-index: 5;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-80px, -30px);

    @media (max-width: ${screenSize.mobile}) {
        transform: translate(0, -40px);
    }

    .closeMenu {
        width: 100%;
        height: 30px;
        text-align: right;
        padding: 19px 30px 0 0;

        .closeMenuBtn {
            cursor: pointer;
        }
    }

    ul {
        list-style: none;
        text-align: center;
        padding: 0 12px;

        li {
            cursor: pointer;
            font-size: 20px;
            font-weight: 500;
            padding: 18px 0 36px 0;
            border-bottom: 1px solid ${colors.thinBorder};
        }

        .noBorder {
            border-bottom: none;
        }
    }
`

export const MenuLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`