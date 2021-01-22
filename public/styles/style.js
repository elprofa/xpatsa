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

    .titreWizard
    {
        font-size: 33px;
        color: #9f9f9f;
        font-weight: 500;
    }
    .MuiStepper-root {
        display: inline-block !important;
        padding: 24px;
    }
    .MuiStep-horizontal {
        height: 100px;
        padding: 20px;
        margin-top: 0px;
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
`;
