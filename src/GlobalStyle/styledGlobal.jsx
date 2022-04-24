import { createGlobalStyle } from "styled-components";
import backgroundDesktop from '../Images/bg-desktop.svg'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: hsl(257, 40%, 49%);
        background-image: url(${backgroundDesktop});
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
    }
`;