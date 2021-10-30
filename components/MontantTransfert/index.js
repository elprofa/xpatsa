import React, {useContext} from "react";
import { Col, Row, Form, Input, CustomInput, FormGroup, Label } from "reactstrap";
//import InputGroupButtonDropdownStc from './FormPersonalInfo.stc';

import { useState } from 'react';

import TestContext from '../../ContextAPI/TestContext';
import MontantTransfertStc from './MontantTransfert.stc';
import {airtelMoneyFees,deductionFrais,calculateTotal,calculateFees,getResult, getRate} from '../shared/utils/utils.js';
import axios from 'axios';

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

  // Remind what choice user made in previous step

  let calTransaction;

  if(transaction.TrBillingInformation=="1")
  {
    calTransaction="A partir de la somme que je dispose en espeèce(Frais exclus)";
    //Affectation des valeur par defaut des champs envoyer et recevoir
    let amount =transaction.TrAmountSent;
    
    let currOriginDev=transaction.TrCurrFrom;
    let currDestinaDev=transaction.TrCurrTo;

    let resultat=getResult(currOriginDev,currDestinaDev,amount);
    const primise1 = Promise.resolve(resultat);
    primise1.then((valeur) => {
      
      document.getElementById("recevoir").value=Math.floor(valeur);
      //  Update contexte API currency
      transaction.TrUpdateAmountReceived(Math.floor(valeur));
      
    });

    let total=calculateTotal(transaction.TrFees,amount); 
    // affecter le total par default 
    transaction.TrUpdateTotal(total);

    // elprofa want to display transaction fees
    let fee=calculateFees(amount,"",currOriginDev,currDestinaDev);
    transaction.TrUpdateFees(fee);//update a contexteApi

  }
  if(transaction.TrBillingInformation=="2")
  {
    calTransaction="A partir de la somme que je dispose en espèce(Frais inclus)";

    //  //Affectation des valeur par defaut des champs envoyer et recevoir
    let amount =transaction.TrAmountSent;
    let ht=parseInt(deductionFrais(amount));
    let fee=parseInt(amount)-parseInt(ht);
    let currOriginDev=transaction.TrCurrFrom;
    let currDestinaDev=transaction.TrCurrTo;

    let resultat=getResult(currOriginDev,currDestinaDev,ht);
    const primise1 = Promise.resolve(resultat);
    primise1.then((valeur) => {
      
      document.getElementById("recevoir").value=Math.floor(valeur);
      //  Update contexte API currency
      transaction.TrUpdateAmountReceived(Math.floor(valeur));
      
    });

    // affecter le total par default 
    transaction.TrUpdateTotal(amount);

    //Frais par default
    transaction.TrUpdateFees(fee);
    

  }
  if(transaction.TrBillingInformation=="3")
  {
    calTransaction="A partir de la somme dans mon AIRTEL MONEY";

     //  //Affectation des valeur par defaut des champs envoyer et recevoir
     let amount =transaction.TrAmountSent;
     let am=transaction.TrAmFee;
     let ht=parseInt(amount)-parseInt(am);
     let fee=transaction.TrFees;
     let htt=parseInt(ht)-parseInt(fee);
     let currOriginDev=transaction.TrCurrFrom;
     let currDestinaDev=transaction.TrCurrTo;
 
     let resultat=getResult(currOriginDev,currDestinaDev,htt);
     const primise1 = Promise.resolve(resultat);
     primise1.then((valeur) => {
       
       document.getElementById("recevoir").value=Math.floor(valeur);
       //  Update contexte API currency
       transaction.TrUpdateAmountReceived(Math.floor(valeur));
       
     });
 
     // affecter le total par default 
     transaction.TrUpdateTotal(amount);
 
     //Frais par default
     transaction.TrUpdateFees(fee);
  }
  if(transaction.TrBillingInformation=="4")
  {
    calTransaction="A partir de la somme à recevoir par le bénéficiaire";
  }


  let OriginCurrency=[];
  let DestinationCurrency=[];

  if(transaction.TrPaysOrigine=="Gabon")
  {
    data1="selected";
    OriginCurrency=[
      {
        device:"XAF",
      }
    ]
  }
  if(transaction.TrPaysOrigine=="Maroc")
  {
    data2="selected";
    OriginCurrency=[
      {
        device:"MAD",
      }
      
    ]
  }
  if(transaction.TrPaysOrigine=="Afrique du sud")
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

  if(transaction.TrPaysDestinataire=="Gabon")
  {
    data4="selected";
    DestinationCurrency=[
      {
        device:"XAF",
      }
    ]
  }
  if(transaction.TrPaysDestinataire=="Maroc")
  {
    data5="selected";
    DestinationCurrency=[
      {
        device:"MAD",
      }
    ]
  }
  if(transaction.TrPaysDestinataire=="Afrique du sud")
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
    if(envoyer==""){
      envoyer=1;
      document.getElementById("envoyer").value=1;
    }


      if(transaction.TrBillingInformation=="1")
      {
        
          let currOriginDev=document.getElementById("selectOrigineCurrency").value;
          let currDestinaDev=document.getElementById("selectDestinataireCurrency").value;

          let resultat=getResult(currOriginDev,currDestinaDev,envoyer);
          const primise1 = Promise.resolve(resultat);
          primise1.then((valeur) => {
            
            document.getElementById("recevoir").value=Math.floor(valeur);

            //  Update contexte API currency
            transaction.TrUpdateAmountReceived(Math.floor(valeur));

          });

          
          // elprofa is trying to fetch rate data 
          let rate=getRate(currOriginDev,currDestinaDev,envoyer);

          const primise2 = Promise.resolve(rate);
            primise2.then((valeur) => {
              //Mise de l'etat "rate"
              transaction.TrUpdateRate(valeur);
              //console.log(ot);
          });

          // elprofa want to display transaction fees
          let fee=calculateFees(envoyer,"",currOriginDev,currDestinaDev);
          transaction.TrUpdateFees(fee);//update a contexteApi
          //elprofa is calculating the total

          let total=calculateTotal(fee,envoyer); 
          transaction.TrUpdateTotal(total);//update a contexteApi

          //  Update contexte API currency
          transaction.TrUpdateCurrFrom(currOriginDev);
          transaction.TrUpdateCurrTo(currDestinaDev);

          //  Update contexte API currency
          transaction.TrUpdateAmountSent(envoyer);
      }
      
      else if(transaction.TrBillingInformation=="2")
      {

        // recherche du montant hors taxe
        let ht=parseInt(deductionFrais(envoyer));
        if(ht<0)
        {
          ht=0;
        }
        // ------------------------------------------
        // deduction des frais
        let fee=parseInt(envoyer)-parseInt(ht);
        if(fee<0)
        {
          fee=0
        }
        // --------------------------------------------

        let currOriginDev=document.getElementById("selectOrigineCurrency").value;
        let currDestinaDev=document.getElementById("selectDestinataireCurrency").value;

        let resultat=getResult(currOriginDev,currDestinaDev,ht);
        const primise1 = Promise.resolve(resultat);
        primise1.then((valeur) => {
          
          document.getElementById("recevoir").value=Math.floor(valeur);
          //  Update contexte API currency
          transaction.TrUpdateAmountReceived(Math.floor(valeur));

        });

        
        // elprofa is trying to fetch rate data 
        let rate=getRate(currOriginDev,currDestinaDev,envoyer);

        const primise2 = Promise.resolve(rate);
          primise2.then((valeur) => {
            //Mise de l'etat "rate"
            transaction.TrUpdateRate(valeur);
            //console.log(ot);
        });

        // elprofa want to display transaction fees
        transaction.TrUpdateFees(fee);//update a contexteApi

        //elprofa is calculating the total

        transaction.TrUpdateTotal(envoyer);//update a contexteApi
        //  Update contexte API currency
        transaction.TrUpdateCurrFrom(currOriginDev);
        transaction.TrUpdateCurrTo(currDestinaDev);

        //  Update contexte API currency
        transaction.TrUpdateAmountSent(envoyer);
    }
    else if(transaction.TrBillingInformation=="3"){
      // recupere les frais airtel money
      let am=airtelMoneyFees(envoyer);
      transaction.TrUpdateAmFee(am);

      // recherche du montant hors taxe
      let ht=parseInt(envoyer)-parseInt(am);
      if(ht<0)
      {
        ht=0;
      }
      // ------------------------------------------
     

      let currOriginDev=document.getElementById("selectOrigineCurrency").value;
      let currDestinaDev=document.getElementById("selectDestinataireCurrency").value;

       // deduction des frais
      let fee=calculateFees(ht,"",currOriginDev,currDestinaDev);
      transaction.TrUpdateFees(fee);//update a contexteApi
       // --------------------------------------------

      // le montant qui reste apres retrait airtel et frais agence
      let hht=parseInt(ht)-parseInt(fee);

      let resultat=getResult(currOriginDev,currDestinaDev,hht);
      const primise1 = Promise.resolve(resultat);
      primise1.then((valeur) => {
        
        document.getElementById("recevoir").value=Math.floor(valeur);
        //  Update contexte API currency
        transaction.TrUpdateAmountReceived(Math.floor(valeur));

      });

      
      // elprofa is trying to fetch rate data 
      let rate=getRate(currOriginDev,currDestinaDev,envoyer);

      const primise2 = Promise.resolve(rate);
        primise2.then((valeur) => {
          //Mise de l'etat "rate"
          transaction.TrUpdateRate(valeur);
          //console.log(ot);
      });

      //elprofa is calculating the total

      transaction.TrUpdateTotal(envoyer);//update a contexteApi
      //  Update contexte API currency
      transaction.TrUpdateCurrFrom(currOriginDev);
      transaction.TrUpdateCurrTo(currDestinaDev);

      //  Update contexte API currency
      transaction.TrUpdateAmountSent(envoyer);
    }
    else
    {
      
    }



  }

  const saisirMontantRecevoir=()=>{
    if(transaction.TrBillingInformation=="4")
    {
      alert('ok');
    }
  }
  
  console.log(transaction)

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
          <Col lg={12} className='d-flex flex-wrap justify-content-center ' >
          <div className="divInput divInputValider">
            <label>Comment voulez-vous qu'on procède au calcul de votre transaction ?</label>
            <input type="texte" disabled value={calTransaction} className="input form-control paysDestinataire" />
          </div>
          </Col>
      </Row>
      <Row form className='mt-5 mb-5'>

          <Col lg={4} className='d-flex flex-wrap justify-content-center right'>
              <div className="divInput">
                <label>envoyer</label>
                <input type="number" id="envoyer" value={transaction.TrAmountSent} min="0" onChange={saisirMontantEnvoi} className="input form-control paysDestinataire" />
              </div>
          </Col> 
          <Col lg={2} className='d-flex flex-wrap justify-content-center left' >
              <div className="divInput">
                <label>&nbsp;</label>
                <select className="form-control" id="selectOrigineCurrency"  name="select" onChange={saisirMontantEnvoi}>
                  {
                    OriginCurrency.map((curr,index)=>(<option key={index}>{curr.device}</option>))
                  }
                </select>
              </div>
          </Col>
          <Col lg={4} className='d-flex flex-wrap justify-content-center right'>
              <div className="divInput">
                <label>Recevoir</label>
                <input type="number" id="recevoir" value={transaction.TrAmountReceived} onChange={saisirMontantRecevoir} className="input form-control paysDestinataire" />
              </div>
          </Col>
          <Col lg={2} className='d-flex flex-wrap justify-content-center left' >
              <div className="divInput">
                <label>&nbsp;</label>
                <select className="form-control" id="selectDestinataireCurrency" name="select">
                  {
                    DestinationCurrency.map((curr,index)=>(<option key={index}>{curr.device}</option>))
                  }
                </select>
              </div>
          </Col>
        

        <Col lg={12}>
              {
                
               <div>
                  <p className="tauxEchange">
                      Frais  : <b><em>{transaction.TrFees}</em></b>
                  </p>
                  <p className="tauxEchange">
                    Taux de change actuel : <b><em>{transaction.TrRate}</em></b>
                  </p>
               </div>
              }
        </Col>
        
      </Row>
      
    </Form>
    </MontantTransfertStc>
  );
};

export default Example;