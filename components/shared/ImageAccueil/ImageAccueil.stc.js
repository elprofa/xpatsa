import styled from "styled-components";

 const ImageAccueilStc = styled.section`
    height:${(props) => props.heightMobile || "250px"};
    @media (min-width: 534px) {
        height:${(props) => props.heightTablette || "430px"};
    }
    @media (min-width: 960px) {
        height:${(props) => props.heightDesktop || "430px"};
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
    .colAccueilLeft
    {
      padding: 32px;
      background: rgb(0,0,0,0.5);
      color: #fff;
    }
    .containerHome
    {
      width: 100%;
      top: 55%;
      position: relative;
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