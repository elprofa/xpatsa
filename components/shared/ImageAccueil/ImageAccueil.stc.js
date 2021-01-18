import styled from "styled-components";

 const ImageAccueilStc = styled.section`
    height:250px;
    @media (min-width: 534px) {
        height:360px;
    }
    @media (min-width: 960px) {
        height:430px;
    }
    svg
    {
        position:relative;
        top:55%;
        width:100%;
        margin:auto;
        font-size:30px;
        color:#fff;
        @media (min-width: 534px) {
            top:60%
        }
    }
    h1
    {
        text-align: center;
        top: 65%;
    }

    .row
    {
        margin:0px;
    }
    div
    {
        width:100%;
    }
    img
    {
        width:100%;
        height:auto !important;
        min-height:auto !important;
        min-width:100% !important;
        max-height:none !important;
    }
`;
export default ImageAccueilStc;