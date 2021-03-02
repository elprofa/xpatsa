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
    
    .input 
    {
        border:0px;
        background:transparent;
        font-weight:600;
        color:#333;
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