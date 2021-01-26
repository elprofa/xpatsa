import React from "react";
import { Col, Row, Form, Input } from "reactstrap";
//import InputGroupButtonDropdownStc from './FormPersonalInfo.stc';

import { useState } from 'react';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);


  return (
    <Form>
      <Row form >
        <Col lg={12} className='d-flex flex-wrap justify-content-center mt-3 w-100'>
        <Form className='w-100 mt-4'>
      <Input type="select" name="select" id="exampleSelect" bsSize="lg" placeholder='Select Country'>
          <option>Select Country</option>
          <option>Gabon F.Cfa</option>
          <option>Maroc Dirhams</option>
          <option>Sud Afrique Rand</option>
        </Input>
    </Form>
        </Col>
      </Row>
    </Form>
  );
};

export default Example;
