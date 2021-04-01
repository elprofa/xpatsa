import React from 'react';
import Styled from 'styled-components';
const PersonalInfoStc=Styled.div`
    .divInput
    {
        width: 100% !important;
        margin: 10px 0px;
        border: 1px solid #ccc;
    }
    select
    {
        border:0px;
        width:100%;
    }

    .divInputValider
    {
        background:#eee;
    }

    .form-control:focus,.form-control:active
    {
        box-shadow:0px 0px 0px;
    }
    label
    {
        margin-bottom:0px;
        color:#ccc;
        margin:0px 10px;
    }
`;
export default PersonalInfoStc;
