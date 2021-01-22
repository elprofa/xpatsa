import styled from "styled-components";
import { Container } from "reactstrap";

export const StepWizardStc = styled(Container)`
    
    
    .firstColonne,.thirdColonne
    {
        padding-top:33px;
    }

    tr.trRow {
        font-size: 18px;
        font-weight:600;
    }
    .thirdColonne
    {
        padding-top:25px;
    }

    .firstColonne,.thirdColonne
    {
        min-width:10%;
    }

    tr.trRow.active {
        border: 2px solid #1c62c3;
        color: #1c62c3;
    }

    tr.trRow.active .firstColonne span
    {
        color: #1c62c3;
        border: 1px solid #1c62c3;
    }
    .firstColonne span
    {
        color: #000;
        background-color: transparent;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: 1px solid #000;
        font-size:18px;
    }
`;
