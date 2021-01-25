import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "reactstrap";
import FormTransactionStc from "./formTransaction.stc";
import InputGroup from "../inputGroup";
import DropDownInput from "../dropDownInput/dropDownInput";


const FormTransaction = (props) => {
  return (
    <FormTransactionStc>
        <h1 className="titreWizard">1. Simuler votre transaction </h1>
        <p className="captionWizard">Veuillez saisir le montant que vous souhaitez envoyer</p>
        <Form>
            <div className="row rowModePaiement">
                <div className="col-lg-3">
                    <input type="radio" name="mode_paiement" id="0"/>
                    <label for="0">En espèces</label>
                </div>
                <div className="col-lg-9">
                    <input type="radio" name="mode_paiement" id="1"/>
                    <label for="1">Par airtel money</label>
                </div>
            </div>
            <label className="label">MONTANT A ENVOYE (Frais exclus)</label>
            <div className="row">
                <div className="col-9 leftInput">
                    <InputGroup textLabel="" />
                </div>
                <div className="col-3 rightInput">
                    <DropDownInput OptionList={[{item:"CFA",value:"xaf"},{item:"USD",value:"dollar"},{item:"EUR",value:"euro"}]} backgroundColor="transparent"/>
                </div>
            </div>
            
            <InputGroup textLabel="FRAIS" />
            <InputGroup textLabel="TOTAL A PAYER (Frais inclus)" />
            <label className="label">MONTANT A RECEVOIR</label>
            <div className="row">
                <div className="col-9 leftInput">
                    <InputGroup textLabel="" />
                </div>
                <div className="col-3 rightInput">
                    <DropDownInput OptionList={[{item:"CFA",value:"xaf"},{item:"USD",value:"dollar"},{item:"EUR",value:"euro"}]} backgroundColor="transparent"/>
                </div>
            </div>
            
        </Form>
        </FormTransactionStc>
  );
};

export default FormTransaction;
