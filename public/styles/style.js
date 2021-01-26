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

//-------------Material design--------------------------

    .spanLabel
    {
        position: relative;
        top: -20px;
        margin-left: 20px;
    }
    .MuiStepLabel-iconContainer {
        padding-right: 25px;
    }

    button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary {
        background: #2261bd;
        border-radius: 0px;
        min-width: 130px;
        box-shadow: 0px 0px 0px;
        border: 1px solid #2261bd;
    }

    button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary:focus
    {
        border: 2px solid #2261bd;
        border-radius:0px;

    }

    button.MuiButtonBase-root.MuiButton-root.MuiButton-text.Mui-disabled.Mui-disabled
    {
        display:none;
    }

    button.MuiButtonBase-root.MuiButton-root.MuiButton-text {
        background: transparent;
        border: 1px solid #2261bd;
        color: #2261bd;
        border-radius: 0px;
        min-width: 130px;
    }

    button.MuiButtonBase-root.MuiButton-root.MuiButton-text.makeStyles-button-14:focus {
    /* background: red; */
        border: 2px solid #2261bd;
        border-radius: 0px;
    }

    .titreWizard
    {
        font-size: 28px;
        color: #686767;
        font-weight: 500;
        margin-top:40px;
        margin-bottom:20px;
    }

    .derniereTape
    {
        text-align:center;
        margin-bottom:40px;
    }

    .derniereTape p span
    {
        font-weight:600;
        color:#2261bd;
    }
    .derniereTape p
    {
        text-align:center;
        font-size:18px;
        font-weight:500px;
        color:#686767;
    }
    .colGaucheWizard
    {
        @media (max-width: 476px) {
            display:none;
        }
    }
    .MuiStepper-root {
        display: inline-block !important;
        padding: 0px!important;
        @media (max-width: 991px) {
            width: 100% !important;
        }
    }
    .MuiStep-horizontal {
        
        height: 100px;
        padding: 20px;
        margin-top: 0px;

        @media (max-width: 991px) {
            width: 100% !important;
        }
    }

    span.MuiStepLabel-root.MuiStepLabel-horizontal.Mui-disabled
    {
        border:0px !important;
    }

    span.MuiStepLabel-root.MuiStepLabel-horizontal.Mui-disabled .MuiStepLabel-label {
        color: #9e9e9e;
    }
    span.MuiStepLabel-root.MuiStepLabel-horizontal {
        border: 1px solid #3f51b5;
        height: 100px;
        margin-top: -20px;
        padding:15px;
    }

    .MuiStep-root.MuiStep-horizontal.MuiStep-completed span.MuiStepLabel-root.MuiStepLabel-horizontal 
    {
        border:0px !important;
    }

    .MuiStep-root.MuiStep-horizontal.MuiStep-completed 
    span.MuiStepLabel-root.MuiStepLabel-horizontal 
    .MuiStepLabel-label.MuiStepLabel-completed
    {
        color:#2eec0b !important;
    }
    .MuiStepIcon-root.MuiStepIcon-completed {
        color: #2eec0b !important;
    }

    .MuiStepLabel-label.MuiStepLabel-active {
        color: #3f51b5 !important;
        font-weight: 600;
    }

    .MuiStepLabel-label {
    font-size: 16px !important;
    font-weight: 600 !important;
    }

    .MuiStepConnector-lineHorizontal
    {
        border:0px !important;
    }
    //----------------------------------------

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

    nav.navbarActive.navbar.navbar-expand-md.navbar-light.bg-blue a,
    nav.navbarActive.navbar.navbar-expand-md.navbar-light.bg-blue select,
    nav.navbarActive.navbar.navbar-expand-md.navbar-light.bg-blue svg,
    nav.navbarActive.navbar.navbar-expand-md.navbar-light.bg-blue button
    {
        color:#fff !important;
    }

    nav.navbarActive.navbar.navbar-expand-md.navbar-light.bg-blue {
        background: linear-gradient(#0a0a0a, transparent);
    }
`;
