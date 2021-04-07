import Styled from 'styled-components';
import {Card} from 'reactstrap';

 const CardClientPhotoStc=Styled(Card)`
    padding:15px;
    box-shadow:1px 1px 6px #ccc;
    margin:15px 0px;

    .cadrePhoto {
        height: 220px;
        overflow:hidden;
    }
    form 
    {
        width:220px;
    }
`;

export default CardClientPhotoStc