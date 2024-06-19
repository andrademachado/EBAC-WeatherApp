import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Menu = styled.menu`
    background-color: ${colors.mainBackground};
    width: 304px;
    border-radius: 15px;
    box-shadow: 2px 10px 34px rgba(0, 0, 0, 0.24);
    z-index: 5;
    position: absolute;
    top: 0;
    right: 0;

    .closeMenu {
        width: 100%;
        height: 30px;
        text-align: right;
        padding: 19px 30px 0 0;

        .closeMenuBtn {
            cursor: pointer;
            font-size: 20px;
            font-weight: 500;
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