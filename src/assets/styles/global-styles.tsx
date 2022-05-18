import { createGlobalStyle } from "styled-components";
import fundo from '../images/fundo.jpg'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Open Sans', sans-serif;
    };

    body {
        height: 200vh;
        background-image: url(${fundo});
        background-size: 100vw 100vh;
        background-repeat: no-repeat;
        background-color: black;
        background-attachment: fixed;
    };
`