import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titre from '../Titre/Titre';
import { Row, Col, Form } from 'reactstrap';
import NewslaterStc from './newsLaters.sct';
import InputGroup from "../inputGroup";
import { InputGroupAddon, Button, Input } from 'reactstrap';

const NewsLater = (props) => {
    const { texteTitre, colorTitre, paragraphe } = props;
    
        return (
            <NewslaterStc >
                <Row >
                    <Col>

                        <Titre texte={texteTitre} color={colorTitre} />
                            <p>{paragraphe}</p>
                    </Col >

                    <Col className="h-100 d-flex d-none d-lg">
                        <InputGroup 
                            textLabel={'VOTRE MAIL/3'}>
                            <InputGroupAddon addonType="append">
                            <Button color={colorTitre}> S'inscrire</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
            </NewslaterStc>
        )
    };

export default NewsLater;