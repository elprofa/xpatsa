import Link from 'next/link'
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import FormContact from '../components/shared/formContact';
import Search from '../components/InputButtonSeach';
import NewTransaction from '../components/ButtonNewTransaction';
import CardInfos from '../components/CardTotal';
import CardActive from '../components/CardActive';
import CardPending from '../components/CardPending';

const Wrapper = styled.div`

  background: #fbfbfb;
  margin:0px;

  .container{
    margin:40px auto;
  }
 
`;

export default function Contact() {
  return (
      <Wrapper>
        <Container>
           <Row>
              <Col>
                  <Search />
              </Col>
              <Col lg={6}>
                  <NewTransaction />
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <CardInfos />
              </Col>
              <Col lg={4}>
                <CardActive/>
              </Col>
              <Col lg={4}>
                <CardPending/>
              </Col>
            </Row>
            <Row>
              <Col>
                  <FormContact />
              </Col>
            </Row>
        </Container>
      </Wrapper>
  )
}