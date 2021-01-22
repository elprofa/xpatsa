import styled from "styled-components";
import { Container } from "reactstrap";

 const FormTransactionStc = styled(Container)`
     padding:0px;
    
    .titreWizard
    {
        font-size: 28px;
        color: #686767;
        font-weight: 500;
    }

    .label
    {
        margin-left: 10px;
        margin-right: 10px;
        background: #fff;
        padding: 0px 5px;
        font-size: 12px;
        color: #6c757d;
        position: relative;
        top: 23px;
        z-index: 1;
    }

    .selectWiz
    {
        height:100%;
    }

    .rightInput select 
    {
        padding:0px;
        width:50px;
        float:right;
        margin-right:10px;
        color:#235fca;
    }
    .rightInput
    {
        padding-left:0px;
    }

    .leftInput .form-control
    {
        border-right:0px;
    }
    .rightInput .form-group
    {
        border: 1px solid #ccc;
        height: 50px;
        margin-top: 6px;
        border-left: 0px;
    }
    .leftInput
    {
        padding-right:0px;
    }
    svg
    {
        display:none;
    }

    .rowModePaiement label
    {
        margin-left:10px;
        font-weight:600;
    }

    .rowModePaiement label label:active {
        color: #0075ff;
    }

    .captionWizard
    {
        color: #2362bf;
        margin-bottom: 30px;
    }
`;

export default FormTransactionStc;