import Styled from 'styled-components';
import {Card} from 'reactstrap';

const CardClientWidget=Styled(Card)`
    padding:15px;
    box-shadow:1px 1px 6px #ccc;
    margin:15px 0px;

    h2.cardTitre {
        font-size: 25px;
        font-weight: 600;
    }

    .profilPicture div {
        border-radius: 100%;
    }

    .profilPicture {
        width: 20%;
        display: inline-block;
    }
    .profilNameRole span {
        font-size: 12px;
        color: #ccc;
    }
    .profilNameRole h3 {
        font-size: 14px;
        font-weight: 600;
    }
    .profilNameRole {
        width: 80%;
        display: inline-block;
    }
    .lineClient.row {
        margin: 5px 0px;
        border-bottom: 1px solid #eee;
        padding: 10px 0px;
    }
    .spanMessage
    {
        float:right;
        cursor:pointer;
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
export default CardClientWidget;