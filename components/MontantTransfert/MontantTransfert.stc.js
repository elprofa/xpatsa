import Styled from "styled-components";

const MontantStc=Styled.div`

.input:focus,.input:active
    {
        box-shadow:0px 0px 0px;
        width:100%;
        border:0px;
    }
    .divInputValider
    {
        background:#eee;
    }

    .right
    {
        padding-right:0px
    }
    .left
    {
        padding-left:0px
    }

    .input 
    {
        border:0px;
        background:transparent;
        color:#333;
    }
    .divInputValider .input
    {
        font-weight:600;
    }
    select
    {
        border:0px;
        width:100%;
    }
    label
    {
        margin-bottom:0px;
        color:#ccc;
    }
    .divInput
    {
        width: 100% !important;
        margin: 10px 0px;
        border: 1px solid #ccc;
        padding: 0px 10px;
    }
`;
export default MontantStc;