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
      <Row form >
        <Col lg={12} className='d-flex flex-wrap justify-content-center mt-3 w-100'>
        <Form className='w-100 mt-4'>
      <Input type="select" name="select" id="exampleSelect" bsSize="lg" placeholder='Select Country'>
          <option>Mode d'envoie</option>
          <option>Airtel Money</option>
          <option>Code agent</option>
          <option>Virement</option>
        </Input>
    </Form>
        </Col>
      </Row>
    </Form>
  );
};

export default Example;