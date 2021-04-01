import CardWidgetStc from './CardWidget.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';

const CardWidget =()=>{
    return(
        <CardWidgetStc>
            <Row>
                <Col sm={4} className="col-4">
                    <span className="spanIcon"><FaUserFriends/></span>
                </Col>
                <Col sm={8} className="col-8">
                    <h4>Total client</h4>
                    <h2>290.000</h2>
                    <p className="action"><span action>13%</span> than last Month</p>
                </Col>
            </Row>
        </CardWidgetStc>
    )
}
export default CardWidget;