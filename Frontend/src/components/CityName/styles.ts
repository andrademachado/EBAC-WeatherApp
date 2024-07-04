import styled from "styled-components";
import { colors } from "../../styles/colors";
import { screenSize } from "../../styles/screen";

export const EbacLink = styled.span`
    display: block;
    margin-top: 38px;
    text-align: center;
    font-size: 12px;
    color: #10001F;
`

export const City = styled.div`
    max-width: 1342px;
    width: 100%;
    margin: 0 auto;
    font-size: 22px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${colors.darkTxt};

    img {
        width: 24px;
    }

    @media (max-width: ${screenSize.mobile}) {
        font-size: 18px;
    }
`