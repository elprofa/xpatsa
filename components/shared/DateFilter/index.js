import DateFilterStc from './DateFilter.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';

const DateFilter =()=>{
    return(
        <DateFilterStc>
            <Row>
                <Col sm={2} >
                   <div className=" spanIcon">
                    <span className="">Days</span>
                   </div>
                </Col>
                <Col sm={2} >
                    <div className=" spanIcon">
                        <span className="">Sem.</span>
                    </div>
                </Col>
                <Col sm={2} >
                    <div className=" spanIcon active">
                        <span className="">Mois</span>
                    </div>
                </Col>
                <Col sm={6} >
                    <div className=" spanIcon dateSpanIcon">
                        <input type="date" className="form-control" />
                    </div>
                </Col>
            </Row>
        </DateFilterStc>
    )
}
export default DateFilter;