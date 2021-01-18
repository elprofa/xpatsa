import styled from "styled-components";

 const GrilleComponentStc = styled.section`

    img
    {
        width:100%;
        height:auto !important;
        min-height:auto !important;
        min-width:100% !important;
        max-height:none !important;
        position:relative !important;
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
export default GrilleComponentStc;