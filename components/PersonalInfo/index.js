import React, {useContext} from "react";
import { Col, Row, Form, Input } from "reactstrap";
//import InputGroupButtonDropdownStc from './FormPersonalInfo.stc';

import { useState } from 'react';
import PersonalInfoStc from './FormPersonalInfo.stc';
import TestContext from '../../ContextAPI/TestContext';

// import {TransactionContext} from "../../ContextAPI/TransactionContext"

const Example = (props) => {
  // const {transaction, changePaysO, changePaysD} = useContext(TransactionContext)
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const transaction = useContext(TestContext);

  const countryOrigineChoosed=(event)=>{

    console.log(event.currentTarget.value);
    transaction.TrUpdatePaysOrigine(event.currentTarget.value);
  }
  const countryDestinataireChoosed=(event)=>{

    console.log(event.currentTarget.value);
    transaction.TrUpdatePaysDestinataire(event.currentTarget.value);
  }
  
  let data1="";
  let data2="";
  let data3="";
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

  let data4="";
  let data5="";
  let data6="";
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

  return (
    <PersonalInfoStc>
      <Form>
        <Row form >
          <Col lg={12} className='d-flex flex-wrap justify-content-center mt-3 w-100'>
            <div className="divInput">
              <label>Pays expéditeur</label>
              <select className="form-control" name="select" onChange={countryOrigineChoosed} >
                  <option value='' >Aucun</option>
                  <option selected={data1} value='GABON'>GABON</option>
                  <option selected={data2} value='MAROC'>MAROC</option>
                  <option selected={data3} value='AFRIQUE DU SUD'>AFRIQUE DU SUD</option>
              </select>
            </div>
        
          <div className="divInput">
            <label>Pays destinataire</label>
            <select className="form-control" id="exampleSelect1" onChange={countryDestinataireChoosed}>
                <option value=''>Aucun</option>
                <option value='GABON' selected={data4}>GABON</option>
                <option value='MAROC' selected={data5}>MAROC</option>
                <option value='AFRIQUE DU SUD' selected={data6}>AFRIQUE DU SUD</option>
            </select>
          </div>
          </Col>
        </Row>
      </Form>
    </PersonalInfoStc>
  )
}

export default Example;
