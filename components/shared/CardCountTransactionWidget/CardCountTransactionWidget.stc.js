import Styled from 'styled-components';
import {Card} from 'reactstrap';

const CardCountTransactionWidgetStc=Styled(Card)`
padding:15px;
box-shadow:1px 1px 6px #ccc;
margin:15px 0px;
    .spanIcon
    {
        font-size: 20px;
        position: relative;
        top: 20%;
        background: #c9e2f1;
        padding: 7px 10px;
        border-radius: 100%;
        color: #2362bf;
    }
    h4{
        font-size: 14px;
        color: #2362bf;
    }
    h2
    {
        font-weight:600;
        font-size:20px;

    }
    .action 
    {
        font-size: 12px;
    }
    .action span 
    {
        color: #23f352;

    }
`;
export default CardCountTransactionWidgetStc;