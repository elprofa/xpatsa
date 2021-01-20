import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
     * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    body {
        font-family: source-sans-pro, sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    nav.navbar
    {
        position:relative;
        z-index:99;
        border-bottom:1px solid #ececec;
        @media (min-width: 768px) 
        {
            height:80px;
        }
    }

    li.nav-item
    {
        @media (min-width: 768px) 
        {
            margin:auto;
        }
    }
    
    ul.mx-auto.navbar-nav {
        
        @media (min-width: 996px) {
            width: 100%;
            padding-left: 30%;
        }
    }
`;
