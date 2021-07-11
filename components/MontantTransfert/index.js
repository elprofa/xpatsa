import React, { useContext } from "react";
import { Col, Row, Form } from "reactstrap";
//import InputGroupButtonDropdownStc from './FormPersonalInfo.stc';

import { useState } from "react";

import TestContext from "../../ContextAPI/TestContext";
import MontantTransfertStc from "./MontantTransfert.stc";
import {
  airtelMoneyFees,
  deductionFrais,
  calculateTotal,
  calculateFees,
  getResult,
  getRate,
} from "../shared/utils/utils.js";

import axios from "axios";

const MontantTransfert = (props) => {
  const {
    TrBillingInformation,
    TrCurrFrom,
    TrCurrTo,
    TrAmountSent,
    TrFees,
    TrUpdateFees,
    TrUpdateAmountReceived,
    TrUpdateTotal,
    TrPaysOrigine,
    TrPaysDestinataire,
  } = useContext(TestContext);

  const [rSelected, setRSelected] = useState(null);

  // Remind what choice user made in previous step

  let calTransaction;

  if (TrBillingInformation == "1") {
    calTransaction =
      "A partir de la somme que je dispose en espeèce(Frais exclus)";
    //Affectation des valeur par defaut des champs envoyer et recevoir
    let amount = TrAmountSent;

    let resultat = getResult(TrCurrFrom, TrCurrTo, amount);
    const primise1 = Promise.resolve(resultat);
    primise1.then((valeur) => {
      document.getElementById("recevoir").value = Math.floor(valeur * 0.965);
      //  Update contexte API currency
      TrUpdateAmountReceived(Math.floor(valeur));
    });

    let total = calculateTotal(TrFees, amount);
    // affecter le total par default
    TrUpdateTotal(total);

    // elprofa want to display transaction fees
    let fee = calculateFees(amount, "", TrCurrFrom, TrCurrTo);
    TrUpdateFees(fee); //update a contexteApi
  }
  if (TrBillingInformation == "2") {
    calTransaction =
      "A partir de la somme que je dispose en espèce(Frais inclus)";

    //  //Affectation des valeur par defaut des champs envoyer et recevoir
    let amount = TrAmountSent;
    let ht = parseInt(deductionFrais(amount));
    let fee = parseInt(amount) - parseInt(ht);
    let TrCurrFrom = TrCurrFrom;
    let TrCurrTo = TrCurrTo;

    let resultat = getResult(TrCurrFrom, TrCurrTo, ht);
    const primise1 = Promise.resolve(resultat);
    primise1.then((valeur) => {
      document.getElementById("recevoir").value = Math.floor(valeur);
      //  Update contexte API currency
      TrUpdateAmountReceived(Math.floor(valeur));
    });

    // affecter le total par default
    TrUpdateTotal(amount);

    //Frais par default
    TrUpdateFees(fee);
  }
  if (TrBillingInformation == "3") {
    calTransaction = "A partir de la somme dans mon AIRTEL MONEY";

    //  //Affectation des valeur par defaut des champs envoyer et recevoir
    let amount = TrAmountSent;
    let am = TrAmFee;
    let ht = parseInt(amount) - parseInt(am);
    let fee = TrFees;
    let htt = parseInt(ht) - parseInt(fee);
    let TrCurrFrom = TrCurrFrom;
    let TrCurrTo = TrCurrTo;

    let resultat = getResult(TrCurrFrom, TrCurrTo, htt);
    const primise1 = Promise.resolve(resultat);
    primise1.then((valeur) => {
      document.getElementById("recevoir").value = Math.floor(valeur);
      //  Update contexte API currency
      TrUpdateAmountReceived(Math.floor(valeur));
    });

    // affecter le total par default
    TrUpdateTotal(amount);

    //Frais par default
    TrUpdateFees(fee);
  }
  if (TrBillingInformation == "4") {
    calTransaction = "A partir de la somme à recevoir par le bénéficiaire";
  }

  const saisirMontantEnvoi = (event) => {
    // let recevoir=event.currentTarget.value;
    let envoyer = document.getElementById("envoyer").value;
    if (envoyer == "") {
      envoyer = 1;
      document.getElementById("envoyer").value = 1;
    }

    if (TrBillingInformation == "1") {
      let TrCurrFrom = document.getElementById("selectOrigineCurrency").value;
      let TrCurrTo = document.getElementById(
        "selectDestinataireCurrency"
      ).value;

      let resultat = getResult(TrCurrFrom, TrCurrTo, envoyer);
      const primise1 = Promise.resolve(resultat);
      primise1.then((valeur) => {
        document.getElementById("recevoir").value = Math.floor(valeur);

        //  Update contexte API currency
        TrUpdateAmountReceived(Math.floor(valeur));
      });

      // elprofa is trying to fetch rate data
      let rate = getRate(TrCurrFrom, TrCurrTo, envoyer);

      const primise2 = Promise.resolve(rate);
      primise2.then((valeur) => {
        //Mise de l'etat "rate"
        TrUpdateRate(valeur);
      });

      // elprofa want to display transaction fees
      let fee = calculateFees(envoyer, "", TrCurrFrom, TrCurrTo);
      TrUpdateFees(fee); //update a contexteApi
      //elprofa is calculating the total

      let total = calculateTotal(fee, envoyer);
      TrUpdateTotal(total); //update a contexteApi

      //  Update contexte API currency
      TrUpdateCurrFrom(TrCurrFrom);
      TrUpdateCurrTo(TrCurrTo);

      //  Update contexte API currency
      TrUpdateAmountSent(envoyer);
    } else if (TrBillingInformation == "2") {
      // recherche du montant hors taxe
      let ht = parseInt(deductionFrais(envoyer));
      if (ht < 0) {
        ht = 0;
      }
      // ------------------------------------------
      // deduction des frais
      let fee = parseInt(envoyer) - parseInt(ht);
      if (fee < 0) {
        fee = 0;
      }
      // --------------------------------------------

      let TrCurrFrom = document.getElementById("selectOrigineCurrency").value;
      let TrCurrTo = document.getElementById(
        "selectDestinataireCurrency"
      ).value;

      let resultat = getResult(TrCurrFrom, TrCurrTo, ht);
      const primise1 = Promise.resolve(resultat);
      primise1.then((valeur) => {
        document.getElementById("recevoir").value = Math.floor(valeur);
        //  Update contexte API currency
        TrUpdateAmountReceived(Math.floor(valeur));
      });

      // elprofa is trying to fetch rate data
      let rate = getRate(TrCurrFrom, TrCurrTo, envoyer);

      const primise2 = Promise.resolve(rate);
      primise2.then((valeur) => {
        //Mise de l'etat "rate"
        TrUpdateRate(valeur);
      });

      // elprofa want to display transaction fees
      TrUpdateFees(fee); //update a contexteApi

      //elprofa is calculating the total

      TrUpdateTotal(envoyer); //update a contexteApi
      //  Update contexte API currency
      TrUpdateCurrFrom(TrCurrFrom);
      TrUpdateCurrTo(TrCurrTo);

      //  Update contexte API currency
      TrUpdateAmountSent(envoyer);
    } else if (TrBillingInformation == "3") {
      // recupere les frais airtel money
      let am = airtelMoneyFees(envoyer);
      TrUpdateAmFee(am);

      // recherche du montant hors taxe
      let ht = parseInt(envoyer) - parseInt(am);
      if (ht < 0) {
        ht = 0;
      }
      // ------------------------------------------

      let TrCurrFrom = document.getElementById("selectOrigineCurrency").value;
      let TrCurrTo = document.getElementById(
        "selectDestinataireCurrency"
      ).value;

      // deduction des frais
      let fee = calculateFees(ht, "", TrCurrFrom, TrCurrTo);
      TrUpdateFees(fee); //update a contexteApi
      // --------------------------------------------

      // le montant qui reste apres retrait airtel et frais agence
      let hht = parseInt(ht) - parseInt(fee);

      let resultat = getResult(TrCurrFrom, TrCurrTo, hht);
      const primise1 = Promise.resolve(resultat);
      primise1.then((valeur) => {
        document.getElementById("recevoir").value = Math.floor(valeur);
        //  Update contexte API currency
        TrUpdateAmountReceived(Math.floor(valeur));
      });

      // elprofa is trying to fetch rate data
      let rate = getRate(TrCurrFrom, TrCurrTo, envoyer);

      const primise2 = Promise.resolve(rate);
      primise2.then((valeur) => {
        //Mise de l'etat "rate"
        TrUpdateRate(valeur);
      });

      //elprofa is calculating the total

      TrUpdateTotal(envoyer); //update a contexteApi
      //  Update contexte API currency
      TrUpdateCurrFrom(TrCurrFrom);
      TrUpdateCurrTo(TrCurrTo);

      //  Update contexte API currency
      TrUpdateAmountSent(envoyer);
    } else {
    }
  };

  const saisirMontantRecevoir = () => {
    if (TrBillingInformation == "4") {
      alert("ok");
    }
  };

  return (
    <MontantTransfertStc>
      <Form>
        <Row form>
          <Col
            lg={12}
            className="d-flex flex-wrap justify-content-center mt-3 w-100"
          >
            <div className="divInput divInputValider">
              <label>Pays expéditeur</label>
              <input
                type="texte"
                value={TrPaysOrigine}
                disabled
                className="input form-control paysOrigine"
              />
            </div>

            <div className="divInput divInputValider">
              <label>Pays destinataire</label>
              <input
                type="texte"
                disabled
                value={TrPaysDestinataire}
                className="input form-control paysDestinataire"
              />
            </div>
          </Col>
        </Row>
        <Row form className="my-5">
          <Col lg={12} className="d-flex flex-wrap justify-content-center ">
            <h5>Radio Buttons</h5>
            <ButtonGroup>
              <Button
                color="primary"
                onClick={() => setRSelected(1)}
                active={rSelected === 1}
              >
                One
              </Button>
              <Button
                color="primary"
                onClick={() => setRSelected(2)}
                active={rSelected === 2}
              >
                Two
              </Button>
              <Button
                color="primary"
                onClick={() => setRSelected(3)}
                active={rSelected === 3}
              >
                Three
              </Button>
            </ButtonGroup>
            <p>Selected: {rSelected}</p>
            <div className="divInput divInputValider">
              <label>
                Comment voulez-vous qu'on procède au calcul de votre transaction
                ?
              </label>
              <input
                type="texte"
                disabled
                value={calTransaction}
                className="input form-control paysDestinataire"
              />
            </div>
          </Col>
        </Row>
        <Row form className="mt-5 mb-5">
          <Col lg={4} className="d-flex flex-wrap justify-content-center right">
            <div className="divInput">
              <label>envoyer</label>
              <input
                type="number"
                id="envoyer"
                value={TrAmountSent}
                min="0"
                onChange={saisirMontantEnvoi}
                className="input form-control paysDestinataire"
              />
            </div>
          </Col>
          <Col lg={2} className="d-flex flex-wrap justify-content-center left">
            <div className="divInput">
              <label>&nbsp;</label>
              <select
                className="form-control"
                id="selectOrigineCurrency"
                name="select"
                onChange={saisirMontantEnvoi}
              >
                {OriginCurrency.map((curr, index) => (
                  <option key={index}>{curr.device}</option>
                ))}
              </select>
            </div>
          </Col>
          <Col lg={4} className="d-flex flex-wrap justify-content-center right">
            <div className="divInput">
              <label>Recevoir</label>
              <input
                type="number"
                id="recevoir"
                value={TrAmountReceived}
                onChange={saisirMontantRecevoir}
                className="input form-control paysDestinataire"
              />
            </div>
          </Col>
          <Col lg={2} className="d-flex flex-wrap justify-content-center left">
            <div className="divInput">
              <label>&nbsp;</label>
              <select
                className="form-control"
                id="selectDestinataireCurrency"
                name="select"
              >
                {DestinationCurrency.map((curr, index) => (
                  <option key={index}>{curr.device}</option>
                ))}
              </select>
            </div>
          </Col>

          <Col lg={12}>
            {
              <p className="tauxEchange">
                Taux de change actuel :{" "}
                <b>
                  <em>{TrRate}</em>
                </b>
              </p>
            }
          </Col>
        </Row>
      </Form>
    </MontantTransfertStc>
  );
};

export default MontantTransfert;
