import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, } from "reactstrap";
import Titre from "../Titre/Titre";
import InputGroup from "../inputGroup";
import Bouton from "../Bouton/Bouton";
import FormDestiStc from './FormDesti.stc';

const FormDestinataire = (props) => {
    const { texte, backgroundColor, color, icon } = props;
  
    return (
      <FormDestiStc className='w-100'>
        
          <Titre texte="2. Entrer le destinataire " color="black" />
          <p className='my-5'>
            Pour transférer 450 CFA, veuillez entrer vos coordonnées
          </p>
          
          <Form>
            <Row>
                <Col lg={12}>
                    <InputGroup textLabel="ENVOYE À (numéro de téléphone ou email)" />    
                </Col>
                
            </Row>

            <Row>
                <Col lg={12}>
                    <InputGroup textLabel="VOTRE NUMERO" />
                </Col>
            </Row>

            <Row>
            <Col sm={12}>
              <InputGroup typeInput="textarea" className="textareaContact" textLabel="DESCRIPTION" />

            </Col>
          </Row>

            <Row>
              <Col lg={4} className='cnt-btn'>
                <Bouton className='bnt my-3' texte=" PRECEDENT " backgroundColor="#FDFEFE" color='#4d3333' />
              </Col>
              <Col lg={8}>
                <Bouton texte=" SUIVANT " icon="false" backgroundColor="#007bff" className='btn my-3 btn'/>
              </Col>
              </Row>
          </Form>
      </FormDestiStc>
    );
  };
  
  export default FormDestinataire;