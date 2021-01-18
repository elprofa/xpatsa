import Link from 'next/link'
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import FormContact from '../components/shared/formContact';

const Wrapper = styled.div`

  background: #fbfbfb;
  margin:0px;

  .card{
    margin:70px auto;
    padding:20px;
    border-color:#ecedee;
    border-radius:0px;
  }
 
`;

export default function Contact() {
  return (
      <Wrapper>
        <Container>
           <Row>
              <Card>
                  <FormContact />
              </Card>
            </Row>
        </Container>
      </Wrapper>
  )
}