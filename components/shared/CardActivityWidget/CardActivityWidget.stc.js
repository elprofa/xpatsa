import Styled from 'styled-components';
import {Card} from 'reactstrap';

const CardActivityWidgetStc=Styled(Card)`
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

a.btnVoirPlus span {
    font-size: 12px;
    margin-left: 10px;
}
a.btnVoirPlus {
    color: #2362bf;
    text-decoration: none;
    font-size: 14px;
    padding: 10px;
}
`;
export default CardActivityWidgetStc;