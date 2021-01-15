import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, FormGroup, Label, Input } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import FormContactStc from './formContact.stc';
import Titre from '../Titre/Titre';
import InputGroup from '../inputGroup';
import Bouton from '../Bouton/Bouton';

const FormContact = (props) => {
  const { texte, backgroundColor,color, icon } = props;

  return (
    <FormContactStc>
        <Container>
        <Titre texte="Contactez-nous "  color="#007bff" />
        
            <p>Des questions? Veuillez nous envoyez un message, nous vous répondrons rapidement</p><br></br>
    
        <Form>
            <Form.Row>
                <Col>
                    <InputGroup textLabel="VOTRE NOM" />
                    <InputGroup textLabel="VOTRE OU NUMERO DE TELEPHONE" />
                </Col>

                <Col>
                    <InputGroup textLabel="VOTRE ADRESSE E-MAIL" />
                    <InputGroup textLabel="OBJET DE VOTRE MESSAGE" />
                </Col>
            </Form.Row>
                
            <Form.Row>
            <Col sm={12}>
                    <InputGroup typeInput="textarea" textLabel="VOTRE MESSAGE" />
            </Col>
            </Form.Row>
     
            <Form.Row>

                <Col sm={3}>
                
                </Col>

                <Col sm={6} className='d-flex justify-content-center'>
                    <Bouton texte=" ENVOYER >" backgroundColor="#007bff" />
                </Col>

                <Col sm={4}>
                
                </Col>
            </Form.Row>
        </Form>
    
        
    </Container>
</FormContactStc>
  )
};

export default FormContact;