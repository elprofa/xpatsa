import styled from "styled-components";
import { Container } from "reactstrap";

 const FormDestinataireStc = styled(Container)`

    padding:0px;
    
    .titreWizard
    {
        font-size: 28px;
        color: #686767;
        font-weight: 500;
    }
    textarea
    {
        min-height:150px;
    }

    .captionWizard
    {
        color: #2362bf;
        margin-bottom: 30px;
    }
`;

export default FormDestinataireStc;