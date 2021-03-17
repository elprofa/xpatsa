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

  // affect default value to choice
  if(transaction.TrBillingInformation=="")
  {
    transaction.TrUpdateBillingInformation(1);
  }
  

  const billingInformationChoosed=(event)=>{
    console.log(event.currentTarget.value);
    transaction.TrUpdateBillingInformation(event.currentTarget.value);
  }

  let data1="";
  let data2="";
  let data3="";
  let data4="";
  if(transaction.TrBillingInformation=="1")
  {
    data1="selected";
  }
  if(transaction.TrBillingInformation=="2")
  {
    data2="selected";
  }
  if(transaction.TrBillingInformation=="3")
  {
    data3="selected";
  }
  if(transaction.TrBillingInformation=="4")
  {
    data4="selected";
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
            <label>Comment voulez-vous qu'on procède au calcul de votre transaction ?</label>
            <select className="form-control" name="select" onChange={billingInformationChoosed} >
                <option value='1' selected={data1}>A partir de la somme que je dispose en espèce(Frais exclus)</option>
                <option value='2' selected={data2}>A partir de la somme que je dispose en espèce(Frais inclus)</option>
                <option value='3' selected={data3}>A partir de la somme dans mon AIRTEL MONEY</option>
                <option value='4' selected={data4}>A partir de la somme à recevoir par le bénéficiaire</option>
            </select>
          </div>
          </Col>
      </Row>
    </Form>
    </ModeEnvoiStc>
  );
};

export default Example;