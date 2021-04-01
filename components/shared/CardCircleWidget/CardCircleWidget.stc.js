import Styled from 'styled-components';
import {Card} from 'reactstrap';

const CardCircleWidgetStc=Styled(Card)`
padding:15px;
box-shadow:1px 1px 6px #ccc;
margin:15px 0px;

@media (max-width: 476px)
{
    display:none;
}

.cardCircleBody {
    min-height:300px;
}

`;
export default CardCircleWidgetStc;