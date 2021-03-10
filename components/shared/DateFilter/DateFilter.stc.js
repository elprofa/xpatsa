import Styled from 'styled-components';
import {Card} from 'reactstrap';

const DateFilterStc=Styled(Card)`
padding:15px;
margin:15px 0px;
border:0px;

.spanIcon {
    border-left: 1px solid #ccc;
    padding: 2px 5px;
    text-align: center;
    font-size: 12px;
    color:#000;
    font-weight:600;
    cursor:pointer;

    &:hover 
    {
        color:#fff;
        background:#2362bf;
    }
}

.spanIcon.active {
    color:#fff;
    background:#2362bf;
}

.dateSpanIcon.active 
{
    background:transparent !important;
    border-bottom:2px solid #2362bf
}

.dateSpanIcon
{
    &:hover 
    {
        background:transparent !important;
        border-bottom:2px solid #2362bf
    }
}
input 
{
    font-size: 12px;
    height: 20px;
    border: 0px;
    margin:0px !important;
    padding:0px !important;
}
`;
export default DateFilterStc;