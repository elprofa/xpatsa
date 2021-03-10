import CardTransactionWidgetStc from './CardTransactionWidget.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';

const CardTransactionWidget =()=>{
    return(
        <CardTransactionWidgetStc>
            <h2 className="cardTitre">Transaction</h2>
            <Row className="cardTransactionHead">
                <Col md={4} className="cardTransactionColumn active">
                    <h4>Total transaction</h4>
                    <h2>$9000 0000 000</h2>
                </Col>
                <Col md={4} className="cardTransactionColumn">
                    <h4>Total transaction</h4>
                    <h2>$9000 0000 000</h2>
                </Col>
                <Col md={4} className="cardTransactionColumn">
                    <h4>Total transaction</h4>
                    <h2>$9000 0000 000</h2>
                </Col>
                
            </Row>
            <Row className="courbe">
                <Col lg={12}></Col>
            </Row>
        </CardTransactionWidgetStc>
    )
}
export default CardTransactionWidget;