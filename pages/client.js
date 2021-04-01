import Link from 'next/link'
import { Container, Row, Col, Card } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import AsideBar from '../components/AsideBar';
import HeadBar from '../components/HeadBar';
import TrCardWidget from '../components/shared/TrCardWidgetLeft';
import CardClientWidgetTable from '../components/shared/CardClientWidgetTable';
const Wrapper = styled.div`

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */
.wrapper {
    display: flex;
    align-items: stretch;
}

.row
{
    margin-left:0px;
    margin-right:0px;
}
 
`;

export default function Client() {
    
  return (
      <Wrapper>
        <div className="wrapper">
            <AsideBar  />
            <div id="content" className="generalAdminBody">

                <HeadBar />
                <div className="adminBody">
                    <Row>
                        <Col lg="6">
                            <TrCardWidget />
                        </Col>
                        <Col lg="6">
                            <TrCardWidget />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <CardClientWidgetTable />
                        </Col>
                    </Row>
                    
                </div>
            </div>
        </div>
      </Wrapper>
  )
}