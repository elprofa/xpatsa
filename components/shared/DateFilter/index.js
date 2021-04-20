import DateFilterStc from './DateFilter.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';
import { useContext } from 'react';
import TestContext from '../../../ContextAPI/TestContext';

const DateFilter =()=>{

    const filtre = useContext(TestContext);
    var d1=new Date()
    var dd = String(d1.getDate()).padStart(2, '0');
    var mm = String(d1.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = d1.getFullYear();
    d1 = yyyy + '-' + mm + '-' + dd;
    var d2=mm + '-' + yyyy;
    var d3=yyyy;

    const testDay=()=>{
        filtre.setDate(d1);
        filtre.setType(0);
    }
    const testMonth=()=>{
        filtre.setDate(d2);
        filtre.setType(1);
    }
    const testYear=()=>{
        filtre.setDate(d3);
        filtre.setType(2);
    }

    const testPeriod=(e)=>{
        // console.log(e.target.value)
        filtre.setDate(e.target.value);
        filtre.setType(3);
    }
    return(
        <DateFilterStc>
            <Row>
                <Col sm={2} >
                   <div className={filtre.type===0?"spanIcon active" :"spanIcon"} title="Aujourd'hui" >
                    <span className="" onClick={testDay}>Auj.</span>
                   </div>
                </Col>
                <Col sm={2} >
                    <div className={filtre.type===1?"spanIcon active" :"spanIcon"} title="Ce mois">
                        <span className="" onClick={testMonth}>Mois</span>
                    </div>
                </Col>
                <Col sm={2} >
                    <div className={filtre.type===2?"spanIcon active" :"spanIcon"} title="Cette année">
                        <span className="" onClick={testYear}>Année</span>
                    </div>
                </Col>
                <Col sm={6} >
                    <div className={filtre.type===3?"spanIcon active dateSpanIcon" :"dateSpanIcon spanIcon"}>
                        <input type="date" onChange={testPeriod} className="form-control" />
                    </div>
                </Col>
            </Row>
        </DateFilterStc>
    )
}
export default DateFilter;