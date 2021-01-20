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


    const NewsRow = [
        {
            position: "left",
            texteTitre: "Newsletter",
            colorTitre:"#007bff",
            paragraphe:"Recevez votre newsletters en vous inscrivant ici."
        },
       ]
    
    export default function Accueil() {
      return (
          
        <Wrapper fluid>
            <Container>
                <Row>
                    <Col>
                        <GrilleComponentPays/>
                    </Col>
                    
                </Row>
            </Container>
            

            <Container fluid>
                <FormContact/>
            </Container>
            <Container className='d-flex justify-content-center'>
                        <Row className='w-100'>
                            <Col className='h-100 d-flex align-items-center justify-content-center'>

                                <NewsLater 
                                    position="right" 
                                    texteTitre="Newsletter"
                                    colorTitre="#007bff"
                                    paragraphe="Recevez votre newsletters en vous inscrivant ici." 
                                />
                            </Col>

                            <Col className='h-100 d-flex align-items-center justify-content-center'>
                                <Button 
                                    texte="S'inscrire "
                                    backgroundColor="#007bff"
                                    borderColor="007bff"
                                    color="#fff" />
                            </Col>
                        </Row>                  
                
            </Container>
        </Wrapper>
      )
    }