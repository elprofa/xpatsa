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
    transaction.TrUpdatePaysOrigine(event.currentTarget.value);
  }
  const countryDestinataireChoosed=(event)=>{
    transaction.TrUpdatePaysDestinataire(event.currentTarget.value);
  }
  
  let data1="";
  let data2="";
  let data3="";
  if(transaction.TrPaysOrigine=="Gabon")
  {
    data1="selected";
  }
  if(transaction.TrPaysOrigine=="Maroc")
  {
    data2="selected";
  }
  if(transaction.TrPaysOrigine=="Afrique du sud")
  {
    data3="selected";
  }

  let data4="";
  let data5="";
  let data6="";
  if(transaction.TrPaysDestinataire=="Gabon")
  {
    data4="selected";
  }
  if(transaction.TrPaysDestinataire=="Maroc")
  {
    data5="selected";
  }
  if(transaction.TrPaysDestinataire=="Afrique du sud")
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
                  <option selected={data1} value='Gabon'>Gabon</option>
                  <option selected={data2} value='Maroc'>Maroc</option>
                  <option selected={data3} value='Afrique du sud'>Afrique du sud</option>
              </select>
            </div>
        
          <div className="divInput">
            <label>Pays destinataire</label>
            <select className="form-control" id="exampleSelect1" onChange={countryDestinataireChoosed}>
                <option value=''>Aucun</option>
                <option value='Gabon' selected={data4}>Gabon</option>
                <option value='Maroc' selected={data5}>Maroc</option>
                <option value='Afrique du sud' selected={data6}>Afrique du sud</option>
            </select>
          </div>
          </Col>
        </Row>
      </Form>
    </PersonalInfoStc>
  )
}

export default Example;
