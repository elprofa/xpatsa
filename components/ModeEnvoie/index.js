import React, {useContext} from "react";
import { Col, Row, Form, Input, CustomInput, FormGroup, Label } from "reactstrap";
//import InputGroupButtonDropdownStc from './FormPersonalInfo.stc';
import ModeEnvoiStc from './ModeEnvoi.stc';

import { useState } from 'react';

import TestContext from '../../ContextAPI/TestContext';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const transaction = useContext(TestContext);

  const billingInformationChoosed=(event)=>{
    console.log(event.currentTarget.value);
    transaction.TrUpdateBillingInformation(event.currentTarget.value);
  }

  let data1="";
  let data2="";
  if(transaction.TrBillingInformation=="ESPECE")
  {
    data1="selected";
  }
  if(transaction.TrBillingInformation=="AIRTEL MONEY")
  {
    data2="selected";
  }

  return (
    <ModeEnvoiStc>
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
          <div className="divInput">
            <label>Billing information</label>
            <select className="form-control" name="select" onChange={billingInformationChoosed} >
                <option value='' >Aucun</option>
                <option value='ESPECE' selected={data1}>ESPECE</option>
                <option value='AIRTEL MONEY' selected={data2}>AIRTEL MONEY</option>
            </select>
          </div>
          </Col>
      </Row>
    </Form>
    </ModeEnvoiStc>
  );
};

export default Example;