import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Poppins", sans-serif;
    }

    .wrapper {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
    }

    .main {
        padding: 80px 60px;
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

        .cardTitle {
            font-size: 20px;
            font-weight: 600;
        }
    }

    .cardHeightA {
        min-height: 410px;
        height: 100%;
    }

    .fadeIn { animation: fadeIn 1s; }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`

export default GlobalStyle