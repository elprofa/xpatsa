import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import MaterialWizard from '../components/shared/MaterialWizard/MaterialWizard';

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
          <MaterialWizard />
        </Container>
      </Wrapper>
  )
}