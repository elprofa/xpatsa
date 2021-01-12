import { createGlobalStyle } from "styled-components";

import Didact from "../fonts/FiraSans-Bold.ttf";

export const GlobalCSS = createGlobalStyle`
     * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    body {
        @font-face {
            font-family: 'Didact Gothic';
            src: url(${Didact}) format('ttf');
            font-weight: 300;
            font-style: normal;
        }
    }
`;
