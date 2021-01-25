import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Form, FormGroup, Label, Input,Card, InputGroupAddon, InputGroupButtonDropdown, } from "reactstrap";
//import FormContactStc from "../formContact/formContact.stc";
import Titre from "../Titre/Titre";
import InputGroup from "../inputGroup";
import Bouton from "../Bouton/Bouton";
import SimulerFormStc from './SimulerT.stc';

const FormSimuler = (props) => {
    const { texte, backgroundColor, color, icon } = props;
  
    return (
      <SimulerFormStc className='w-100'>
        
          <Titre texte="1. Simuler votre transaction " color="black" />
          <p className='my-2'>
            Veuillez saisir le montant que vous souhaitez envoyer
          </p>
          <Row className='my-1'>
                <Col lg={5}>
                    <FormGroup check className='radio'>
                        <Label check>
                            <Input type="radio" name="especes" className='lbCheck'/>{' '}
                            En espèces</Label>
                    </FormGroup>
                </Col>
                
                <Col lg={7}>
                    <FormGroup check className='radio'>
                        <Label>
                            <Input type="radio" name="airtel_Money" check className='lbCheck'/>{' '}
                                Par Airtel Money
                        </Label>
                    </FormGroup>
                </Col>
            </Row>

          <Form>
            <Row>
                <Col lg={12}>
                    <InputGroup textLabel="MONTANT ENVOYE (frais exclus)" />    
                </Col>
                
            </Row>

            <Row>
                <Col lg={12}>
                    <InputGroup textLabel="FRAIS" />
                </Col>
            </Row>

            <Row>
            <Col lg={12}>
                <InputGroup textLabel="MONTANT À PAYER (frais inclus)" />
              </Col>
            </Row>
            
            <Row>
            <Col lg={12}>
                <InputGroup textLabel="MONTANT À RECEVOIR" />
              </Col>
            </Row>
   
            <Row>
              <Col lg={12}>
                <Bouton texte=" COMMENCER" icon="true" backgroundColor="#007bff" />
              </Col>
              </Row>
          </Form>
      </SimulerFormStc>
    );
  };
  
  export default FormSimuler;