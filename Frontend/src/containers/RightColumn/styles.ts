import styled from "styled-components";
import { screenSize } from "../../styles/screen";

export const RightColumn = styled.section`
    display: flex;
    flex-direction: column;
    width: 430px;

    @media (max-width: ${screenSize.mainBreak}) {
        max-width: 874px;
        width: 100%;
        margin-top: 38px;
        flex-direction: column-reverse;
    }
`

export const Map = styled.div`
    min-height: 424px;
    background-color: #fff;
    border-radius: 16px;
    cursor: pointer;
    background-position: center;
    background-size: cover;
    position: relative;

    .mapBanner {
        display: none;

        @media (max-width: ${screenSize.mainBreak}) {
            display: block;
            width: 100%;
            height: 54px;
            background-color: rgba(217, 217, 217, 0.8);
            padding: 15px 72px;
            text-align: right;
            font-size: 16px;
            font-weight: 500;
            text-decoration: underline;
            position: absolute;
            bottom: 0;
            right: 0;
            border-radius: 0 0 16px 16px;
        }
    }
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
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(5px);
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