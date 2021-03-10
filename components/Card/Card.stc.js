import styled from "styled-components";

 const CardStc = styled.div`

 width:100%;
 padding:20px 0px;
 .row 
 {
     margin:0px;
 }

 .cardInfos {
    width: 100%;
    background: white;
    box-shadow: 10px 7px 7px #F4F4F4; 
    }

    .cardInfos:hover {
    box-shadow: 20px 15px 15px #E2E1E1; 
 }
 
 .iconsCol {
     width: 15vw;
     height: 10vh;

 }

 .icons {
     display: block;
     color:'#007bff';
     overflow: hidden;
     background: #B5DCFC;
     border-radius: 100%;
 }

 .details {
     font-size: 22px;
     color: #3CE99E;
 }

 .more-details {
     font-size: 20px;
     //color: #D6D6D6;
 }



h3 
    {
        font-size: 30px;
        font-weight: 700;
        position: relative;
        color: #007bff;
    }

    .cols 
    {
        height: auto;
    }

    .col-lg-6 div
    {
        position:relative !important;
    }

    .divTexte
    {
        width: 100% !important;

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

export default CardStc;