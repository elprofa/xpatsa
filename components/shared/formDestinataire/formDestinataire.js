import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "reactstrap";
import FormDestinataireStc from "./formDestinataire.stc";
import InputGroup from "../inputGroup";


const FormDestinataire = (props) => {
  return (
    <FormDestinataireStc>
        <h1 className="titreWizard">2. Entrer le destinataire</h1>
        <p className="captionWizard">Pour transferer 450 CFA, Veuillez entrer vos coordonnées</p>
        <Form>
            <InputGroup textLabel="ENVOYE A (Numéro de téléphone ou email)" />
            <InputGroup textLabel="VOTRE NUMERO" />
            <InputGroup typeInput="textarea" className="textareaContact" textLabel="DESCRIPTION" />
            
        </Form>
        </FormDestinataireStc>
  );
};

export default FormDestinataire;
