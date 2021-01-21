import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import NewslaterStc from './newsLaters.stc';
//import InputGroup from "../inputGroup";
import { InputGroupAddon, InputGroup, Button, Input } from 'reactstrap';

const NewsLater = (props) => {

    const { textLabel } = props;

        return (
            <NewslaterStc >
                <Row className='divTexte'>
                    <Col lg={5} className='cols'>
                        <h3>Newsletter </h3>  
                        <p>Recevez votre newsletters en vous inscrivant ici.</p>
                    </Col >

                    <Col lg={7} className='cols h-100 d-flex align-items-center justify-content-center colFormNewsLetter'>
                        <InputGroup textLabel={'VOTRE MAIL'}>
                        <label>VOTRE MAIL</label>
                        <Input
                            textLabel={'VOTRE MAIL'}/>
                        <InputGroupAddon addonType="append">
                        <Button color="primary" >S'inscrire</Button>
                        </InputGroupAddon>
                        </InputGroup>                       

                    </Col>
                </Row>
            </NewslaterStc>
        )
    };

export default NewsLater;