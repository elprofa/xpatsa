import DateFilterStc from './DateFilter.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';

const DateFilter =()=>{
    return(
        <DateFilterStc>
            <Row>
                <Col sm={2} className=" spanIcon">
                    <span className="">Days</span>
                </Col>
                <Col sm={2} className=" spanIcon">
                    <span className="">Sem.</span>
                </Col>
                <Col sm={2} className=" spanIcon active">
                    <span className="">Mois</span>
                </Col>
                <Col sm={6} className=" spanIcon dateSpanIcon">
                    <input type="date" className="form-control" />
                </Col>
            </Row>
        </DateFilterStc>
    )
}
export default DateFilter;