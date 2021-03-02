import React, {useContext} from "react";
import { Col, Row, Form, Input, CustomInput, FormGroup, Label } from "reactstrap";
//import InputGroupButtonDropdownStc from './FormPersonalInfo.stc';

import { useState } from 'react';

import TestContext from '../../ContextAPI/TestContext';
import MontantTransfertStc from './MontantTransfert.stc'

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const transaction = useContext(TestContext);

  return (
    <MontantTransfertStc>
    <Form>
      <Row form >
        <Col lg={12} className='d-flex flex-wrap justify-content-center mt-3 w-100'>
          <div className="divInput divInputValider">
            <label>Pays expéditeur</label>
              <input type="texte" value={transaction.TrPaysOrigine} disabled className="input form-control paysOrigine" />
          </div>
      
        <div className="divInput divInputValider">
          <label>Pays destinataire</label>
          <input type="texte" disabled value={transaction.TrPaysDestinataire} className="input form-control paysDestinataire" />
        </div>
        </Col>
      </Row>
      <Row form className='my-5'>
          <Col lg={12} className='d-flex flex-wrap justify-content-center w-50' >
          <div className="divInput divInputValider">
            <label>Billing information</label>
            <input type="texte" disabled value={transaction.TrBillingInformation} className="input form-control paysDestinataire" />
          </div>
          </Col>
      </Row>

      <Row form className='mt-5 mb-5'>
        <Col lg={12} className='d-flex flex-wrap justify-content-center w-50' >
            <div className="divInput">
              <label>Contact destinataire</label>
              <input type="texte"  className="input form-control paysDestinataire" />
            </div>
        </Col>
        <Col lg={12} className='d-flex flex-wrap justify-content-center w-50' >
            <div className="divInput">
              <label>Montant à envoyer</label>
              <input type="number" className="input form-control paysDestinataire" />
            </div>
        </Col>
      </Row>
    </Form>
    </MontantTransfertStc>
  );
};

export default Example;