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
        display: grid;
        grid-template-columns: auto 448px;
        gap: 42px;
    }

    .card {
        background-color: ${colors.card};
        border-radius: 16px;
        color: ${colors.darkTxt};
    }
`

export default GlobalStyle