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
        <Col lg={12} className='d-flex flex-wrap justify-content-center mt-2 w-100'>
        <Label for="exampleCustomSelectDisabled">Informations Personnel</Label>
                <Input type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled fluid>
                    <option value="">Country Selected</option>
                    <option>Value 1</option>
                </Input>
            </Col>
        </Row>

      <Row form className='mt-5 mb-5'>
        
      <Col lg={12} className='d-flex flex-wrap justify-content-center mt-1 w-100'>
        <Label for="exampleCustomSelectDisabled">Mode de Paiement</Label><br></br>
        </Col>
        <Col lg={6} className='d-flex flex-wrap justify-content-center mt-4 w-50' >
          <CustomInput type="checkbox" id="exampleAirtelmoney" label="Airtel Money" inline/>
        </Col>

        <Col lg={6} className='d-flex flex-wrap justify-content-center mt-4 w-50' >
          <CustomInput type="checkbox" id="exampleEspece" label="Espece" inline/>
        </Col>
      </Row>

    </Form>
  );
};

export default Example;