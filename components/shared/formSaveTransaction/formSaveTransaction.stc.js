import Styled from 'styled-components';
import {Card} from 'reactstrap';

const FormSaveTransactionStc=Styled(Card)`
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

    span.appercuTaux {
    color: #ff0000;
}

.cardActiviteHead
{
    margin-top:30px;

    .inputTransaction {
        border-radius: 0px;
        height: 50px;
        font-size: 15px;
        font-weight: bold;
    }
    .read 
    {
        background: #f9f9f9;
    }
}

.select-react > div
{
    min-height:50px !important;
    border-radius:0px;
}

.response
{
    width: 100%;
    text-align: center;
    margin: 20px 0px;
}
`;
export default FormSaveTransactionStc;