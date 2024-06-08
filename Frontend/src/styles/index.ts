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
    }

    .wrapper {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto; 
    }

    .main {
        padding: 56px 60px;
        background-color: ${colors.mainBackground};
    }

    .section {
        display: flex;
        gap: 42px;
    } 

    .card {
        background-color: ${colors.card};
        border-radius: 16px;
        color: ${colors.darkTxt};
        flex-grow: 2;
        max-width: 850px;
        width: 100%;
        box-shadow: 2px 10px 34px rgba(0, 0, 0, 0.24);
        transition: all 1s ease;

        &:hover {
            background-color: ${colors.cardHover};
        }
    }

    .cardHeightA {
        min-height: 432px;
        height: 100%;
    }

    .cardHeightB {
        min-height: 340px;
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