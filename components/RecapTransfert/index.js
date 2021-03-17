import React, {useContext} from "react";
import { Col, Row, Form, Input } from "reactstrap";
import Styled from 'styled-components';

import { useState } from 'react';
import RecapTransfertStc from './RecapTransfert.stc';
import TestContext from '../../ContextAPI/TestContext';

const StyleSeet=Styled(Col)`
   p 
    {
        width: 100%;
        font-weight: 600;
        font-size: 16px;
        color: #333;
        margin:10px 0px;
    }

     span 
    {
        font-size: 17px;
        color: #007bff;
    }
    .auxiliareFees
    {
        color:#333 !import;
        text-align:center;
        border-bottom: 1px solid #ccc;
    }

    .total 
    {
        background: #f0f0f0;
        padding: 10px 5px;
        text-transform: uppercase;
    }
`;

const Example = (props) => {
 
  const transaction = useContext(TestContext);


  
  let calTransaction;

  if(transaction.TrBillingInformation=="1")
  {
    calTransaction="A partir de la somme que je dispose (Frais exclus)";
  }
  if(transaction.TrBillingInformation=="2")
  {
    calTransaction="A partir de la somme que je dispose (Frais inclus)";
  }
  if(transaction.TrBillingInformation=="3")
  {
    calTransaction="A partir de la somme dans mon AIRTEL MONEY";
  }
  if(transaction.TrBillingInformation=="4")
  {
    calTransaction="A partir de la somme à recevoir par le bénéficiaire";
  }

  const displaySendMount=()=>{
    if(transaction.TrBillingInformation=="1")
    {
      return(
        <StyleSeet lg={12}>
          <p>Pays expéditeur : <span>{transaction.TrPaysOrigine} ({ transaction.TrCurrFrom })</span></p>
          <p>Pays destinataire : <span>{transaction.TrPaysDestinataire} ({ transaction.TrCurrTo })</span></p>
          <p>Calcul des coûts : <span>{calTransaction}</span></p>
          <p>Montant à expedier : <span> {transaction.TrAmountSent} { transaction.TrCurrFrom }</span></p>
          <p>Montant à recevoir : <span> {transaction.TrAmountReceived} { transaction.TrCurrTo }</span></p>
          <p>Taux de change : <span>{transaction.TrRate}</span></p>
          <p className="auxiliareFees">Autres frais à payer</p>
          <p>Frais d'agence : <span>{transaction.TrFees} { transaction.TrCurrFrom }</span></p>
          <p className="auxiliareFees">Total à payer</p>
          <p className="total">Total à payer : <span>{transaction.TrTotal} { transaction.TrCurrFrom }</span></p>
        </StyleSeet>
      )
    }
    if(transaction.TrBillingInformation=="2")
    {
      let ht;
      ht=parseInt(transaction.TrAmountSent)-parseInt(transaction.TrFees);
      return(
        <StyleSeet lg={12}>
          <p>Pays expéditeur : <span>{transaction.TrPaysOrigine} ({ transaction.TrCurrFrom })</span></p>
          <p>Pays destinataire : <span>{transaction.TrPaysDestinataire} ({ transaction.TrCurrTo })</span></p>
          <p>Calcul des coûts : <span>{calTransaction}</span></p>
          <p>Montant à expedier : <span> {ht} { transaction.TrCurrFrom }</span></p>
          <p>Frais d'agence retirés : <span> {transaction.TrFees} { transaction.TrCurrFrom }</span></p>
          <p>Montant à recevoir : <span> {transaction.TrAmountReceived} { transaction.TrCurrTo }</span></p>
          <p>Taux de change : <span>{transaction.TrRate}</span></p>
          <p className="auxiliareFees">Frais auxiliares à payer</p>
          <p>**** : <span>****</span></p>
          <p className="auxiliareFees">Total à payer</p>
          <p className="total">Total à payer : <span>{transaction.TrTotal} { transaction.TrCurrFrom }</span></p>
        </StyleSeet>
        
        
      )
    }
    if(transaction.TrBillingInformation=="3")
    {

      let ht;
      ht=parseInt(transaction.TrAmountSent)-parseInt(transaction.TrAmFee)-parseInt(transaction.TrFees);
      return(
        <StyleSeet lg={12}>
          <p>Pays expéditeur : <span>{transaction.TrPaysOrigine} ({ transaction.TrCurrFrom })</span></p>
          <p>Pays destinataire : <span>{transaction.TrPaysDestinataire} ({ transaction.TrCurrTo })</span></p>
          <p>Calcul des coûts : <span>{calTransaction}</span></p>
          <p>Montant à expedier : <span> {ht} { transaction.TrCurrFrom }</span></p>
          <p>Frais Airtel money retirés : <span> {transaction.TrAmFee} { transaction.TrCurrFrom }</span></p>
          <p>Frais d'agence retirés : <span> {transaction.TrFees} { transaction.TrCurrFrom }</span></p>
          <p>Montant à recevoir : <span> {transaction.TrAmountReceived} { transaction.TrCurrTo }</span></p>
          <p>Taux de change : <span>{transaction.TrRate}</span></p>
          <p className="auxiliareFees">Frais auxiliares à payer</p>
          <p>**** : <span>****</span></p>
          <p className="auxiliareFees">Total à payer</p>
          <p className="total">Total à payer : <span>{transaction.TrTotal} { transaction.TrCurrFrom }</span></p>
        </StyleSeet>
      )
    }
    if(transaction.TrBillingInformation=="4")
    {
      
    }
  }
 
  return (
    <RecapTransfertStc>
        <Form>
            <Row form >
                <Col lg={12} className='d-flex flex-wrap justify-content-center head'>
                    <h1>Recapitulatif de votre transaction</h1>
                    <p>Veuillez trouver ci-dessous le recapitulatif de votre transaction</p>
                </Col>
                {
                  displaySendMount()
                }
            </Row>
        </Form>
    </RecapTransfertStc>
  )
}

export default Example;
