import styled from "styled-components";

import { FormGroup } from "reactstrap";

export const SelectGroup = styled(FormGroup)`
    .col-sm-1,.col-sm-11
    {
        padding:0px;
        text-align:center;
    }
    svg
    {
        margin-top: 10px;
        position: absolute;
        margin: 10px;
        font-size: inherit;
        top: 2px;
        left:0px;
    }
    select
    {
        border: 0px;
        padding-left:30px;
    }

    label
    {
        
        z-index: 3;
        position: relative;
        margin-left: 10px;
        background: #fff;
        padding: 0px 5px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 12px;
        color: #6c757d; 
    }

    select:focus
    {
        box-shadow:0px 0px 0px #000;
    }
    .row
    {
        border: 1px solid #ced4da;
        margin:0px;
        margin-top:-18px;
    }
`;
