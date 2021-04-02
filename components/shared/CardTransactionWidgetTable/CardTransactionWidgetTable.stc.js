import Styled from 'styled-components';
import {Card} from 'reactstrap';

const CardTransactionWidgetTableStc=Styled(Card)`
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

.client span 
{
    padding:2px
}

.yes
{
    font-size: 13px;
    background: green;
    width: 100%;
    min-width: 100px !important;
    padding: 5px 30px;
    color: #fff;
}
.no
{
    font-size: 13px;
    background: red;
    width: 100%;
    min-width: 100px !important;
    padding: 5px 35px;
    color: #fff;
}
`;
export default CardTransactionWidgetTableStc;