import styled from "styled-components";

 const NewslaterStc = styled.div`

 width:100%;
 padding:20px 0px;
 .row 
 {
     margin:0px;
 }

 input,button
 {
     border-radius:0px;
     height:50px;
     min-width:100px;
 }
.colFormNewsLetter
{
    margin-top:10px;
}
 label
 {
    position: absolute;
    z-index: 9;
    top: -18px;
    margin-left: 10px;
    margin-right: 10px;
    background: #fff;
    padding: 0px 5px;
    font-size: 12px;
    color: #6c757d;
    margin-top: 10px;
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

export default NewslaterStc;