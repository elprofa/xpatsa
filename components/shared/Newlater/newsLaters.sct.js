import styled from "styled-components";

 const NewslaterStc = styled.section`

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

export default NewslaterStc;