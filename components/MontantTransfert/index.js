import React, {useContext} from "react";
import { Col, Row, Form, Input, CustomInput, FormGroup, Label } from "reactstrap";
//import InputGroupButtonDropdownStc from './FormPersonalInfo.stc';

import { useState } from 'react';

import TestContext from '../../ContextAPI/TestContext';
import MontantTransfertStc from './MontantTransfert.stc';
import {getResult, getRate} from '../shared/utils/utils.js';


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


  let OriginCurrency=[];
  let DestinationCurrency=[];

  if(transaction.TrPaysOrigine=="GABON")
  {
    data1="selected";
    OriginCurrency=[
      {
        device:"XAF",
      }
    ]
  }
  if(transaction.TrPaysOrigine=="MAROC")
  {
    data2="selected";
    OriginCurrency=[
      {
        device:"MAD",
      }
      
    ]
  }
  if(transaction.TrPaysOrigine=="AFRIQUE DU SUD")
  {
    data3="selected";
    OriginCurrency=[
      {
        device:"USD",
        
      },
      {
        device:"RAND",
      }
    ]
  }

  if(transaction.TrPaysDestinataire=="GABON")
  {
    data4="selected";
    DestinationCurrency=[
      {
        device:"XAF",
      }
    ]
  }
  if(transaction.TrPaysDestinataire=="MAROC")
  {
    data5="selected";
    DestinationCurrency=[
      {
        device:"MAD",
      }
    ]
  }
  if(transaction.TrPaysDestinataire=="AFRIQUE DU SUD")
  {
    data6="selected";
    DestinationCurrency=[
      {
        device:"USD",
        
      },
      {
        device:"RAND",
      }
    ]
  }


  const saisirMontantEnvoi=(event)=>{
    // let recevoir=event.currentTarget.value;
   let envoyer=document.getElementById("envoyer").value;
   let currOriginDev=document.getElementById("selectOrigineCurrency").value;
   let currDestinaDev=document.getElementById("selectDestinataireCurrency").value;
  
   

  let resultat=getResult(currOriginDev,currDestinaDev,envoyer);
  const primise1 = Promise.resolve(resultat);
  primise1.then((valeur) => {
    document.getElementById("recevoir").value=valeur;
  });

  // elprofa is trying to fetch rate data 
  let rate=getRate(currOriginDev,currDestinaDev,envoyer);
  const primise2 = Promise.resolve(rate);
    primise2.then((valeur) => {
      //Mise de l'etat "rate"
      transaction.TrUpdateRate(valeur);
  });
}

  const saisirMontantRecevoir=(event)=>{
    // let recevoir=event.currentTarget.value;
   let recevoir=document.getElementById("recevoir").value;
   let currOriginDev=document.getElementById("selectOrigineCurrency").value;
   let currDestinaDev=document.getElementById("selectDestinataireCurrency").value;

   let resultat=getResult(currDestinaDev,currOriginDev,recevoir);

   const primise1 = Promise.resolve(resultat);
 
   primise1.then((valeur) => {
     document.getElementById("envoyer").value=valeur;
   });  

    // elprofa is trying to fetch rate data 
  let rate=getRate(currOriginDev,currDestinaDev,recevoir);
  const primise2 = Promise.resolve(rate);
    primise2.then((valeur) => {
      //Mise à jours de l'etat "rate"
      transaction.TrUpdateRate(valeur);
  });
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
              <input type="number" id="envoyer" onChange={saisirMontantEnvoi} className="input form-control paysDestinataire" />
            </div>
        </Col>
        <Col lg={2} className='d-flex flex-wrap justify-content-center w-50 left' >
            <div className="divInput">
              <label>&nbsp;</label>
              <select className="form-control" id="selectOrigineCurrency"  name="select" onChange={saisirMontantEnvoi}>
                {
                  OriginCurrency.map((curr,index)=>(<option key={index}>{curr.device}</option>))
                }
                  
              </select>
            </div>
        </Col>
        <Col lg={4} className='d-flex flex-wrap justify-content-center w-50 right'>
            <div className="divInput">
              <label>Recevoir</label>
              <input type="number" id="recevoir" onChange={saisirMontantRecevoir}  className="input form-control paysDestinataire" />
            </div>
        </Col>
        <Col lg={2} className='d-flex flex-wrap justify-content-center w-50 left' >
            <div className="divInput">
              <label>&nbsp;</label>
              <select className="form-control" id="selectDestinataireCurrency" name="select" onChange={saisirMontantRecevoir}>
                {
                  DestinationCurrency.map((curr,index)=>(<option key={index}>{curr.device}</option>))
                }
              </select>
            </div>
        </Col>
        <Col>
              {
                <p className="tauxEchange">
                  Taux de change actuel : <b><em>{transaction.TrRate}</em></b>
              </p>
              }
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