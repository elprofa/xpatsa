import React from "react";
import { RangerFooter } from "./footer.stc";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Row, Col, Button, ListGroup, ListGroupItem, Container } from "reactstrap";
import { BiMobileAlt } from 'react-icons/bi';

const PiedDePage = (props) => {

  return <RangerFooter>
      <Container>

            <Row className='d-flex p-1'>
                <Col sm={1} className="pl-0">
                    <Button className="d-inline"> langue</Button>
                </Col>
                <Col sm={7} >
                    <ListGroup horizontal>
                        <ListGroupItem tag="a" href="#">Transfert d'argent</ListGroupItem>
                        <ListGroupItem tag="a" href="#">A propos</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Contact</ListGroupItem>
                        <ListGroupItem tag="a" href="#">S'inscrire</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col sm={4} className="col-icon d-flex justify-content-end">
                    Suiver-nous sur:
                    <FaFacebookSquare size={25} className="mx-2"/>
                    <FaTwitterSquare size={25} className="mr-2"/>
                    <FaLinkedin size={25} className="mr-1"/>
                </Col>
            </Row>
            <Row className='d-flex lastRow pl-0'>
                <Col sm={6} className="d-flex align-items-center pl-0 contact-tel"> <BiMobileAlt/> Maroc: 077.44.42.39 / Afrique du Sud : 074.13.08.94</Col>
                <Col sm={6} className="d-flex d-flex align-items-center justify-content-end col-copyright"> ©  Copyright 2021 - XPATSA - Tous droits réservés</Col>
            </Row>
      </Container>
    </RangerFooter>;
};

export default PiedDePage;