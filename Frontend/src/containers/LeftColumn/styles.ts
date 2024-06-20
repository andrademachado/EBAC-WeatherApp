import styled from "styled-components";
import { screenSize } from "../../styles/screen";

export const LeftColumn = styled.section`
    max-width: 874px;
    width: 100%;
    min-width: 300px;
`

export const HoursContainer = styled.div`
    padding: 22px 20px;

    @media (max-width: ${screenSize.mobile}) {
        padding: 12px 10px;
    }

    .isSelected {
        border-bottom: 2px solid #000;
        font-weight: 700;
    }

    .hoursContainer {
        margin-top: 20px;
    }
`

export const HoursCardBtn = styled.button`
    cursor: pointer;
    background-color: transparent;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 400;
    border: none;
    border-bottom: 2px solid transparent;
    font-family: "Poppins", sans-serif;
`