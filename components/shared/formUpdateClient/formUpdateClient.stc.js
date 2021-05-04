import Styled from 'styled-components';
import {Card} from 'reactstrap';

const FormClientClientStc=Styled(Card)`
    padding:15px;
    box-shadow:1px 1px 6px #ccc;
    margin:15px 0px;
    @media (max-width: 768px)
    {
        overflow-x:scroll;
    }

    h2.cardTitre {
        font-size: 25px;
        font-weight: 600;
    }
    .pictureClient div 
    {
        border-radius:100%;
    }

    form 
    {
        width:100%;
    }

    input 
    {
        height: 50px;
        border-radius:0px;
    }

    .response
    {
        width: 100%;
        text-align: center;
        margin: 20px 0px;
    }
`;
export default FormClientClientStc;