import Link from 'next/link'
import {Container, Row,Col,Card} from "reactstrap";
import styled from "styled-components";
import FormRegister from "../components/shared/formRegister/formRegister";

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

export default function Inscription() {
  return (
      <Wrapper>
        <Container>
            <Row>
                <Col>
                    <Card>
                        
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <FormRegister />
                    </Card>
                </Col>
            </Row>
        </Container>
      </Wrapper>
  )
}
