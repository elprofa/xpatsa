import Link from 'next/link'
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import Wizard from '../components/shared/Wizard/Wizard';

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
                 <Wizard />
              </Col>
            </Row>
        </Container>
      </Wrapper>
  )
}