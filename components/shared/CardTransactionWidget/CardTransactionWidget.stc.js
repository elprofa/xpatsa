import Styled from 'styled-components';
import {Card} from 'reactstrap';

const CardTransactionWidgetStc=Styled(Card)`
padding:15px;
box-shadow:1px 1px 6px #ccc;
margin:15px 0px;
h2.cardTitre {
    font-size: 25px;
    font-weight: 600;
}

.cardTransactionHead.row {
    background: #2362bf;
    color: #fff;

    .col-md-4
    {
        padding:0px;
    }
}

.cardTransactionHead h4 {
    font-size: 14px;
    font-weight: 100;
}

.cardTransactionColumn
{
    padding:15px;
    cursor:pointer;
    &:hover 
    {
        background: #2d70d4;
    }
}
.cardTransactionColumn h2 {
    font-size: 18px;
    font-weight: 600;
}
.cardTransactionColumn.active {
    background: #2d70d4;
}

.courbe.row
{
    min-height:250px;
    @media (max-width: 476px)
    {
      display:none;
    }
}
`;
export default CardTransactionWidgetStc;