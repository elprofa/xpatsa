import Link from 'next/link'
import {Container, Row,Col,Card} from "reactstrap";
import styled from "styled-components";
import FormRegister from "../components/shared/formRegister/formRegister";
import Image from 'next/image';


const Wrapper = styled.div`

  background: #fbfbfb;
  margin:0px;
  height: 80vh;


  .card{
    margin:70px auto;
    padding:20px;
    border-color:#ecedee;
    border-radius:0px;
    min-height:350px;
  }
`;

export default function Inscription() {
  return (
      <Wrapper>
        <Container className="h-100">
            <Row className="h-100">
                <Col lg={6} className="h-100 d-none d-lg-block">
                    
                    <Image 
                          src='/img/computer.svg'
                          alt="Picture of computer"
                          layout="fill"
                          />
                    
                </Col>
                <Col lg={6} className="h-100 pr-0">
                    <Card className="h-75">
                        <FormRegister />
                    </Card>
                </Col>
            </Row>
        </Container>
      </Wrapper>
  )
}
