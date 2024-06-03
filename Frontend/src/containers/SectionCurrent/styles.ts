import styled from "styled-components";
import { colors } from "../../styles/colors";

export const City = styled.div`
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
    background-color: #fff;
    flex-grow: 1;
    border-radius: 16px;
    cursor: pointer;
`

export const FullScreen = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    .overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .mapModal {
        background-color: #fff;
        max-width: 1340px;
        width: 100%;
        max-height: 90vh;
        margin: 0 10px;
        padding: 10px;
        border-radius: 10px;
        position: relative;
    }
`