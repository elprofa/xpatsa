import styled from "styled-components";

 const GrilleComponentPaysStc = styled.section`

    .spanBold
    {
        font-weight:600;
    }
    td
    {
        @media (max-width: 476px) {
           display:block;
        }
    }
    svg
    {
        width: 100%;
        padding: 8px;

        @media (max-width: 767px) {
            min-width:40px;
        }
        
    }


    .tdIcon 
    {
        width:10%;
        border:0px;
    }
    .tdInfo 
    {
        border:0px;
        width:40%;
    }
    img
    {
        width:100%;
        height:auto !important;
        min-height:auto !important;
        min-width:100% !important;
        max-height:none !important;
        position:relative !important;
    }

    h3 
    {
        font-size: 30px;
        font-weight: 700;
        padding-bottom: 15px;
        position: relative;
        color: #007bff;
    }

    .col-lg-6 div
    {
        position:relative !important;
    }

    .divTexte
    {
        @media (min-width: 991px) {
            padding-top:5%;
        }
    }
    
    .col-lg-6
    {
        border-bottom: 1px solid #f3f2f2;

        @media (min-width: 991px) {
            padding-left:30px;
            padding-right:30px;
            border:0px;
        }
    }

    .row
    {
        padding:40px 0px;
         @media (max-width: 991px) {
            padding:10px 0px;
        }
    }
`;
export default GrilleComponentPaysStc;