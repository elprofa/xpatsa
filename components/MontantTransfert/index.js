import React from "react";
import { Col, Row, Form, Input, CustomInput, FormGroup, Label } from "reactstrap";
//import InputGroupButtonDropdownStc from './FormPersonalInfo.stc';

import { useState } from 'react';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);


  return (
    <Form>
        <Row>
            <Col lg={12} className='d-flex flex-wrap justify-content-center mt-3 w-100'>
                <Input type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled fluid>
                    <option value="">Country Selected</option>
                    <option>Value 1</option>
                </Input>
            </Col>
        </Row>

        <Row>
            <Col lg={12} className='d-flex flex-wrap justify-content-center mt-3 w-100'>
                <Input type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled fluid>
                    <option value="">Envoi mode Selected</option>
                    <option>Value 1</option>
                    </Input>
            </Col>
        </Row>

      <Row form >
        <Col lg={5} >
          <FormGroup>
            <Label for="exampleEmail">Contact</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email / numéro de téléphone" />
          </FormGroup>
        </Col>

        <Col lg={2} className='d-flex flex-wrap justify-content-center mt-5 w-100'>
          <span>Ou</span>
        </Col>


        <Col lg={5}>
          <FormGroup>
            <Label for="montant">Montant sans frais</Label>
            <Input type="number" name="number" min='0' max='90000000' id="examplePassword" placeholder="Saisir le montant" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
      <Col lg={12} className='d-flex flex-wrap justify-content-center mb-3 w-50' >
      <Input type="select" name="select" id="exampleSelect" bsSize="lg" placeholder='Select Country'>
          <option>Mode d'envoie</option>
          <option>Airtel Money</option>
          <option>Code agent</option>
          <option>Virement</option>

        </Input>
        </Col>
        </Row>
    </Form>
  );
};

export default Example;