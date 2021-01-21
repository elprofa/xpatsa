import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Form, FormGroup, Label, Input,Card } from "reactstrap";
import FormContactStc from "./formContact.stc";
import Titre from "../Titre/Titre";
import InputGroup from "../inputGroup";
import Bouton from "../Bouton/Bouton";

const FormContact = (props) => {
  const { texte, backgroundColor, color, icon } = props;

  return (
    <FormContactStc>
      
        <Titre texte="Contactez-nous " color="#007bff" />
        <p>
          Des questions? Veuillez nous envoyez un message, nous vous répondrons
          rapidement
        </p>
        <Card>
        <Form>
          <Row>
            <Col lg={6}>
              <InputGroup textLabel="VOTRE NOM" />
              <InputGroup textLabel="VOTRE OU NUMERO DE TELEPHONE" />
            </Col>

            <Col lg={6}>
              <InputGroup textLabel="VOTRE ADRESSE E-MAIL" />
              <InputGroup textLabel="OBJET DE VOTRE MESSAGE" />
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <InputGroup typeInput="textarea" className="textareaContact" textLabel="VOTRE MESSAGE" />
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Bouton texte=" ENVOYER" icon="true" backgroundColor="#007bff" />
            </Col>
          </Row>
        </Form>
      </Card>
    </FormContactStc>
  );
};

export default FormContact;
