import Link from 'next/link'
import { Container, Row, Col, Card } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import AsideBar from '../components/AsideBar';
import HeadBar from '../components/HeadBar';
import CardWidget from '../components/shared/CardWidget';
import CardTransactionWidget from '../components/shared/CardTransactionWidget';
import CardActiviteWidget from '../components/shared/CardActivityWidget';
import CardCircleWidget from '../components/shared/CardCircleWidget';
import CardClientWidget from '../components/shared/CardClientWidget';
import DateFilter from '../components/shared/DateFilter';
const Wrapper = styled.div`

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */
.wrapper {
    display: flex;
    align-items: stretch;
}

 
`;

export default function Dashboard() {

    const hideNavBar=()=>{
        var element=document.getElementById("sidebar");
 
        element.classList.toggle("hidden");

        var cls=element.className;
        var search=cls.search('hidden');
        console.log(search);

        var element1=document.getElementById("iconCloseAsideBar");

        if(search!=-1)
        {
            element1.className = "iconActive";
        }
        else
        {
            element1.className = "";
        }
    }
  return (
      <Wrapper>
        <div className="wrapper">
            <AsideBar  />
            <div id="content" className="generalAdminBody">

                <HeadBar hideNavBar={hideNavBar}/>
                <div className="adminBody">
                    <Row>
                        <Col lg={3}>
                            <CardWidget />
                        </Col>
                        <Col lg={3}>
                            <CardWidget />
                        </Col>
                        <Col lg={3}>
                            <CardWidget />
                        </Col>
                        <Col lg={3}>
                            <DateFilter />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="8">
                            <Row>
                                <Col lg={12}>
                                    <CardTransactionWidget />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <CardActiviteWidget />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4">
                            <CardCircleWidget />
                            <CardClientWidget />
                        </Col>
                    </Row>
                    
                </div>
            </div>
        </div>




      </Wrapper>
  )
}