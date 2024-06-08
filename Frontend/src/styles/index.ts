import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { fonts } from "./fonts";

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
    }

    .main {
        max-width: 1342px;
        width: 100%;
        margin: 0 auto;
        margin-top: 56px;
    }

    .section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
        padding: 0 10px;
    } 

    .card {
        background-color: ${colors.card};
        color: ${colors.darkTxt};
        border-radius: 16px;
        max-width: 850px;
        width: 100%;
        min-width: 786px;
        box-shadow: 2px 10px 34px rgba(0, 0, 0, 0.24);
        transition: all 1s ease;

        &:hover {
            background-color: ${colors.cardHover};
        }

        @media (max-width: 1324px) {
            width: auto;
        }
    }

    .smallCard {
        background-color: ${colors.card};
        color: ${colors.darkTxt};
        border-radius: 16px;
        max-width: 430px;
        width: 100%;
        min-width: 430px;
        height: 424px;
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
`

export default GlobalStyle