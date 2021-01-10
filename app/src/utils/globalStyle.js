import { createGlobalStyle } from 'styled-components';
import Nunito from '../fonts/nunito.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Nunito';
        src: url(${Nunito});
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Nunito';
    }

    html, body {
        width: 100%;
        height: 100%;
        background-color: transparent;
    }
`;

export default GlobalStyle;
