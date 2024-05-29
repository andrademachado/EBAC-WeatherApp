import styled from "styled-components";
import { colors } from "../../styles/colors";

export const City = styled.div`
    font-family: "Open Sans", sans-serif;
    font-size: 22px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    color: ${colors.darkTxt};

    img {
        width: 24px;
    }
`

export const Map = styled.div`
    border-radius: 16px;
    font-size: 20px;
    font-weight: 400;
`