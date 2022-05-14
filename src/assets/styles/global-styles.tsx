import { createGlobalStyle } from "styled-components";
import img from '../images/background-image.jpg'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        width: 100vw;
        height: 100vh;
        background-image: url(${img});
        background-size: 100vw;
    }
`