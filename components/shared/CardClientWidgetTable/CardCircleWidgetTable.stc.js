import Styled from 'styled-components';
import {Card} from 'reactstrap';

const CardClientWidgetTableStc=Styled(Card)`
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


.thead-th
{
    font-weight:600;
    font-size:15px;
}
.iconAction span
{
    margin:auto 10px;
}
`;
export default CardClientWidgetTableStc;