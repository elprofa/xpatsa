import Styled from 'styled-components';
import {Card} from 'reactstrap';

 const CardTransactionPhotoStc=Styled(Card)`
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

    .formChangeFile div
    {
        padding:0px;
        margin:0px;
    }

    .cadrePhoto img
    {
        width:220px;
    }

    .formChangeFile input
    {
        border:1px solid #ccc;
        height:44px;
        border-radius:0px;
        border-right:0px;
    }
    .formChangeFile button 
    {
        border:1px solid #ccc;
        height:44px;
        border-radius:0px;
        border-left:0px;
    }
`;

export default CardTransactionPhotoStc