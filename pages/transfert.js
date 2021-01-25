import { from } from "@apollo/client";
import Link from "next/link";
import { Container, Row, Col } from 'reactstrap';
import styled from "styled-components";
import FormDestinataire from "../components/shared/FormDestinataire";
import ConfirmerEnvoyer from '../components/shared/ConfirmerEnvoie';

const Wrapper = styled(Container)`
  background: #fbfbfb;
  width: 100%;
  height: 80vh;

  .card {
    border-color: #ecedee;
    border-radius: 0px;
    padding: 20px;
    @media (min-width: 900px) {
      width: 50%;
      height: 50%;
    }
  }
`;

    
    export default function Transfert() {
      return (
          
        <Wrapper fluid>
            <Container>
                <Row>
                    <Col>
                        <FormDestinataire/>
                    </Col>

                    <Col>
                    <ConfirmerEnvoyer />
                    </Col>
                </Row>
                <Row></Row>
                
            </Container>             
    </Wrapper>
      )
    }