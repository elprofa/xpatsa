import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "reactstrap";
import BlockConfirmationStc from "./blockConfirmation.stc";
import InputGroup from "../inputGroup";


const BlockConfirmation = (props) => {
  return (
    <BlockConfirmationStc>
        <h1 className="titreWizard">3. Entrer le destinataire</h1>
        <p className="captionWizard">Veuillez trouver ci-dessous le récapitulatif de votre transfert.</p>
        <div className="row">
            <div className="col-sm-12">
                <span className="pDonner">Montant à envoyer:</span>
                <span className="pValeur">345 CFA</span>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <span className="pDonner">Frais de transfert:</span>
                <span className="pValeur">12 CFA</span>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <span className="pDonner">Montant total à payer:</span>
                <span className="pValeur">345 CFA</span>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <span className="pDonner">Destinataire:</span>
                <span className="pValeur">357 CFA</span>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <span className="pDonner">Description</span>
            </div>
            <p className="pDescription">Lorem, ipsum dolor sit amet consectetur adipisicing,
             elit. Atque, laboriosam ab voluptatibus, accusantium, omnis soluta dignissimos facere asperiores, 
            quo aliquid culpa fugiat adipisci suscipit sit minus recusandae ipsa voluptates nam.</p>
        </div>
        </BlockConfirmationStc>
  );
};

export default BlockConfirmation;
