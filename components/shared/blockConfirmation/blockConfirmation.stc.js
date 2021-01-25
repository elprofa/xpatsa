import styled from "styled-components";
import { Container } from "reactstrap";

 const BlockConfirmationStc = styled(Container)`

    padding:0px;

    span.pDonner {
        font-size: 18px;
        font-weight: 600;
        margin-right: 15px;
        color:#686b70;
    }

    .row
    {
        margin: 20px 0;
    }
    .col-sm-12
    {
        padding:0px;
    }
    span.pValeur {
        font-size: 18px;
        font-weight: 600;
        color: #2261bd;
    }
    
    .titreWizard
    {
        font-size: 28px;
        color: #686767;
        font-weight: 500;
    }
    
    .captionWizard
    {
        color: #2362bf;
        margin-bottom: 30px;
    }
`;

export default BlockConfirmationStc;