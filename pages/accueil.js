import { from } from "@apollo/client";
import Link from "next/link";
import { Container, Button, Row, Col } from 'reactstrap';
import styled from "styled-components";
import { Titre } from "../components/shared/Titre/Titre";
import NewsLater from '../components/shared/Newlater';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import FormContact from '../components/shared/formContact';
import GrilleComponentPays from '../components/shared/PaysDispo';

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

    
    export default function Accueil() {
      return (
          
        <Wrapper fluid>
            <Container>
                <Row>
                    <Col>
                        <GrilleComponentPays/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <FormContact />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <NewsLater />
                    </Col>
                </Row>
            </Container>             
    </Wrapper>
      )
    }