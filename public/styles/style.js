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
            height: 80px;
            padding-top: 20px;
        }
    }

    ul.mx-auto.navbar-nav {
        
        @media (min-width: 996px) {
            width: 100%;
            padding-left: 30%;
        }
    }

    nav.navbarActive.navbar.navbar-expand-md.navbar-light.bg-blue button
    {
        border:1px solid #fff !important;
    }

    /* nav.navbarActive.navbar.navbar-expand-md.navbar-light.bg-blue a,
    nav.navbarActive.navbar.navbar-expand-md.navbar-light.bg-blue select,
    nav.navbarActive.navbar.navbar-expand-md.navbar-light.bg-blue svg,
    nav.navbarActive.navbar.navbar-expand-md.navbar-light.bg-blue button
    {
        color:#fff !important;
    }

    nav.navbarActive.navbar.navbar-expand-md.navbar-light.bg-blue {
        background: linear-gradient(#0a0a0a, transparent);
    } */



/* pour le dashboard */

.generalAdminBody
{
    width:100%;
}

.adminBody
{
    padding:10px;
}
    
.hidden
{
    #chart 
    {
        display:none;
    }


    width:10vw !important;
    min-width:8vw !important;

    @media (max-width: 767px)
    {
        width:0px !important;
        padding:0px;
        min-width:0px !important;
        & .sidebar-header,& ul.list-unstyled.components
        {
            display:none;
        }
    }
    @media (min-width: 768px)
    {
        ul.list-unstyled.components li a span {
            display: none;
        }
        ul.list-unstyled.components li a {
            padding: 10px;
        }
        ul.list-unstyled.CTAs
        {
            display:none;
        }
    }

    @media (min-width: 991px)
    {
        ul.list-unstyled.components li a i {
            font-size: 20px;
        }
        ul.list-unstyled.components li a {
            text-align: center;
        }
    }
}

.react-confirm-alert-body
{
    background-color:#2164c0 !important;
    border-radius:0px;
    color:#fff;
    h1
    {
        font-size:24px;
    }
    button 
    {
        background: transparent;
        border: 1px solid #fff;
        border-radius: 0px;
    }
}
`;
