import React from "react";
import { Col, Row, Form, Container, CustomInput, FormGroup, Label } from "reactstrap";
//import InputGroupButtonDropdownStc from './FormPersonalInfo.stc';

import { useState } from 'react';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);


  return (
    <Form>
        <Label for="exampleCustomSelectDisabled" tag='h3' className='mb-3'>Details de votre transaction</Label>
                <Row className='d-flex flex-wrap justify-content-flex-start mt-2 w-85'>
                    <Col lg={6} tag='h5'>Le destinataire de votre transaction est: </Col>
                    <Col lg={4}>Kurt MOUCKETOU</Col>
                </Row>

                <Row className='d-flex flex-wrap justify-content-flex-start mt-2 w-85'>
                    <Col lg={6}tag='h5' >Le envoyer est: </Col>
                    <Col lg={4}>290.000 F CFA</Col>
                </Row>

                <Row className='d-flex flex-wrap justify-content-flex-start mt-2 w-85'>
                    <Col lg={6} tag='h5'>Les frais de votre opérateur local: </Col>
                    <Col lg={4}>8.700 F CFA</Col>
                </Row>

                <Row className='d-flex flex-wrap justify-content-flex-start mt-2 w-85'>
                    <Col lg={6} tag='h5'>Les frais Xpatsa: </Col>
                    <Col lg={4}>4.700 F CFA</Col>
                </Row>
    </Form>
  );
};

export default Example;