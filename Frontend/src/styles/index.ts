import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .wrapper {
        max-width: 1920px;
        width: 100%;
        margin: 0 auto;
    }
`

export default GlobalStyle