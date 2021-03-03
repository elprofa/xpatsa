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

  let data1="";
  let data2="";
  let data3="";
  let data4="";
  let data5="";
  let data6="";

  if(transaction.TrPaysOrigine=="GABON")
  {
    data1="selected";
  }
  if(transaction.TrPaysOrigine=="MAROC")
  {
    data2="selected";
  }
  if(transaction.TrPaysOrigine=="AFRIQUE DU SUD")
  {
    data3="selected";
  }

  if(transaction.TrPaysDestinataire=="GABON")
  {
    data4="selected";
  }
  if(transaction.TrPaysDestinataire=="MAROC")
  {
    data5="selected";
  }
  if(transaction.TrPaysDestinataire=="AFRIQUE DU SUD")
  {
    data6="selected";
  }


  const saisirMontantRecevoir=(event)=>{
    // let recevoir=event.currentTarget.value;
    // let envoyer=document.getElementById("envoyer").value;
    alert("Cette partie est encours de developpement");
  }

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
      <Col lg={4} className='d-flex flex-wrap justify-content-center w-50 right'>
            <div className="divInput">
              <label>envoyer</label>
              <input type="number" id="envoyer" onKeyUp={saisirMontantRecevoir} className="input form-control paysDestinataire" />
            </div>
        </Col>
        <Col lg={2} className='d-flex flex-wrap justify-content-center w-50 left' >
            <div className="divInput">
              <label>&nbsp;</label>
              <select className="form-control" name="select">
                  <option selected={data1} value="XAF">XAF</option>
                  <option selected={data2} value="DIRH">DIRHAM</option>
                  <option selected={data3} value="USD">DOLLAR</option>
              </select>
            </div>
        </Col>
        <Col lg={4} className='d-flex flex-wrap justify-content-center w-50 right'>
            <div className="divInput">
              <label>Recevoir</label>
              <input type="number" id="recevoir" onKeyUp={saisirMontantRecevoir}  className="input form-control paysDestinataire" />
            </div>
        </Col>
        <Col lg={2} className='d-flex flex-wrap justify-content-center w-50 left' >
            <div className="divInput">
              <label>&nbsp;</label>
              <select className="form-control" name="select">
                  <option selected={data4} value="XAF">XAF</option>
                  <option selected={data5} value="DIRH">DIRHAM</option>
                  <option selected={data6} value="USD">DOLLAR</option>
              </select>
            </div>
        </Col>
        <Col lg={12} className='d-flex flex-wrap justify-content-center w-50' >
            <div className="divInput">
              <label>Contact destinataire</label>
              <input type="texte"  className="input form-control paysDestinataire" />
            </div>
        </Col>
      </Row>
    </Form>
    </MontantTransfertStc>
  );
};

export default Example;