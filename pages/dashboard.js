import Link from 'next/link'
import { Container, Row, Col, Card } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import AsideBar from '../components/AsideBar';
import HeadBar from '../components/HeadBar';
import CardTransactionWidget from '../components/shared/CardTransactionWidget';
import CardActiviteWidget from '../components/shared/CardActivityWidget';
import CardCircleWidget from '../components/shared/CardCircleWidget';
import CardClientWidget from '../components/shared/CardClientWidget';
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

.row [class*='col-']
{
    @media (max-width: 476px)
    {
       padding:0px !important;
    }
}

 
`;

export default function Dashboard() {

  return (
      <Wrapper>
        <div className="wrapper">
            <AsideBar  />
            <div id="content" className="generalAdminBody">

                <HeadBar />
                <div className="adminBody">
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