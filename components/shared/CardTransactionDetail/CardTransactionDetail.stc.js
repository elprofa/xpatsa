import Styled from 'styled-components';
import {Card} from 'reactstrap';

const CardTransactionDetailStc=Styled(Card)`

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

    p.value {
    padding: 10px 0px;
    margin: 0px;
    font-size: 20px;
    font-weight: 600;
    }
    p.label {
        border-bottom:1px solid #ccc;
        padding: 10px 0px;
        margin: 0px;
    }
    .iconDetailUser
    {
        float:right;
        cursor:pointer
    }
    a.btn {
    background: #2362bf;
    border-radius: 0px;
    border: 0px;
    color: #fff;
    padding: 10px;
    float:right;
}

.no
{
    color:#ff0000;
}

.yes 

{
    color:#2362bf;
    cursor:pointer;
    a
    {
        color:#ccc;
        font-size:14px;
    }
}

.blockCol
{
    margin:20px 0px;
}
`;

export default CardTransactionDetailStc;  