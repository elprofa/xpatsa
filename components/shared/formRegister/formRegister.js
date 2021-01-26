import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "reactstrap";
import FormRegisterStc from "./formRegister.stc";
import Titre from "../Titre/Titre";
import InputGroup from "../inputGroup";
import Bouton from "../Bouton/Bouton";
import CheckBox from "../checkBox/checkBox";

const FormRegister = (props) => {
  const { texte, backgroundcolor, color, icon } = props;
  return (
    <FormRegisterStc>
      <Form>
        <Titre texte="S'inscrire sur XPATSA" color="#007bff" />
        <InputGroup textLabel="NOMS & PRENOMS" />
        <InputGroup textLabel="ADRESSE E-MAIL OU NUMERO DE TELEPHONE" />
        <InputGroup textLabel=" CREER UN MOT DE PASSE" />
        <Row>
          <Col id="left">
            <CheckBox
              textLabel=" J'accepte les termes et conditions"
              idInput="conditionTerme"
            />
          </Col>
          <Col id="right">
            <Bouton texte="S'INSCRIRE'" backgroundcolor="#007bff" />
          </Col>
        </Row>
      </Form>
    </FormRegisterStc>
  );
};

export default FormRegister;
