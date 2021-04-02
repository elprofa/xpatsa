import Styled from 'styled-components';

const ModeEnvoiStc=Styled.div`
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
        margin:0px 10px;
    }
    .divInput
    {
        width: 100% !important;
        margin: 10px 0px;
        border: 1px solid #ccc;
    }
`;
export default ModeEnvoiStc; 