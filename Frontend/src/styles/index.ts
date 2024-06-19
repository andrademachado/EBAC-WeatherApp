import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { screenSize } from "./screen";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${fonts.main};
        padding-top: 40px;
        padding-bottom: 50px;
    }

    .wrapper {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding: 0 10px;
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    /* .main {
        max-width: 1342px;
        width: 100%;
        margin: 0 auto;
        margin-top: 56px;
    } */

    /* .section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
    }  */

    .card {
        background-color: ${colors.card};
        color: ${colors.darkTxt};
        border-radius: 16px;
        /* max-width: 874px; */
        width: 100%;
        min-width: 560px;
        box-shadow: 2px 10px 34px rgba(0, 0, 0, 0.24);
        transition: all 1s ease;

        &:hover {
            background-color: ${colors.cardHover};
        }
    }

    .smallCard {
        background-color: ${colors.card};
        color: ${colors.darkTxt};
        border-radius: 16px;
        /* max-width: 430px;
        width: 100%;
        min-width: 430px; */
        /* height: 424px; */
        box-shadow: 2px 10px 34px rgba(0, 0, 0, 0.24);
        transition: all 1s ease;
    }

    .cardHeightA {
        min-height: 424px;
        height: 100%;
    }

    .cardHeightB {
        min-height: 364px;
        height: 100%;
    }

    .fadeIn { animation: fadeIn 1s; }

    .fastFadeIn { animation: fadeIn .5s; }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    .isVisible {
        visibility: visible;
    }

    .hide {
        visibility: hidden;
    }

    .pulsate{
        background: linear-gradient(-45deg, #DDDDDD, #F0F0F0, #DDDDDD, #F0F0F0);
        background-size: 400% 400%;
        -webkit-animation: Gradient 2.25s ease infinite;
        -moz-animation: Gradient 2.25s ease infinite;
        animation: Gradient 2.25s ease infinite;
    }

    @-webkit-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @-moz-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
`

export const Main = styled.main`
    /* display: flex;
    justify-content: space-between;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: auto 430px;
    gap: 10px;
    max-width: 1342px;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;

    @media (max-width: ${screenSize.mainBreak}) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export default GlobalStyle