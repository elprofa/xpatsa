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

      <Row form className='mt-5 mb-5'>
        <Col lg={6} className='d-flex flex-wrap justify-content-center mt-5 w-50' >
          <CustomInput type="checkbox" id="exampleAirtelmoney" label="Airtel Money" inline disabled />
        </Col>

        <Col lg={6} className='d-flex flex-wrap justify-content-center mt-5 w-50' >
          <CustomInput type="checkbox" id="exampleEspece" label="Espece" inline disabled />
        </Col>
      </Row>

      <Row form className='mt-5 mb-5'>
        <Col lg={6} className='d-flex flex-wrap justify-content-center my-5 w-50' >
        <Input placeholder="contact destinataire" />
        </Col>

        <Col lg={6} className='d-flex flex-wrap justify-content-center mt-5 w-50' >
        <Input type='number' min='0' max='10000000' placeholder="Montant envoyer HT" />
        </Col>
      </Row>
    </Form>
  );
};

export default Example;