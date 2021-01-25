import React from "react";
import { Col, Row, Button, Form, FormGroup, InputGroup, InputGroupButtonDropdown, Label, Input } from "reactstrap";

import { useState } from 'react';
import {
  InputGroupAddon,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  return (
    <Form>
        <Row>
        <Col lg={6} className='w-60 m-5'>
      
      <InputGroup>
        
        <Input placeholder="Choisissez votre destination" />
        <InputGroupButtonDropdown addonType="prepend" isOpen={splitButtonOpen} toggle={toggleSplit}>
          
          <DropdownToggle split outline />
          <DropdownMenu>
            <DropdownItem>Dirhams</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Rand</DropdownItem>
          </DropdownMenu>
          <Button addonAfter='Selectionnez' outline>Selectionnez</Button>
        </InputGroupButtonDropdown>
      </InputGroup>
    </Col>
        </Row>
    </Form>
    
  );
}


export default Example;