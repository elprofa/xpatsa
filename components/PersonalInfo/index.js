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
  
  return (
    <PersonalInfoStc>
      <Form>
        <Row form >
          <Col lg={12} className='d-flex flex-wrap justify-content-center mt-3 w-100'>
            <div className="divInput">
              <label>Pays expéditeur</label>
              <select type="select" name="select" onChange={countryOrigineChoosed} >
                  <option value=''>Aucun</option>
                  <option value='GABON'>Gabon F.Cfa</option>
                  <option value='MAROC'>Maroc Dirhams</option>
                  <option value='AFRIQUE DU SUD'>Sud Afrique Rand</option>
              </select>
            </div>
        
          <div className="divInput">
            <label>Pays destinataire</label>
            <select name="select1" id="exampleSelect1" onChange={countryDestinataireChoosed}>
                  <option value=''>Aucun</option>
                  <option value='GABON'>Gabon F.Cfa</option>
                  <option value='MAROC'>Maroc Dirhams</option>
                  <option value='AFRIQUE DU SUD'>Sud Afrique Rand</option>
            </select>
          </div>
          </Col>
        </Row>
      </Form>
    </PersonalInfoStc>
  )
}

export default Example;
