import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Form} from 'reactstrap';
import FormRegisterStc from './formRegister.stc';
import Titre from '../Titre/Titre';
import InputGroup from '../inputGroup';
import Bouton from '../Bouton/Bouton';

const FormRegister = (props) => {
  const { texte, backgroundColor,color, icon } = props;
  return (
    <FormRegisterStc>
        <Form>
            <Titre texte="Se connecter "  color="#007bff" />
            <InputGroup textLabel="NOMS & PRENOMS" />
            <InputGroup textLabel="ADRESSE E-MAIL OU NUMERO DE TELEPHONE" />
            <InputGroup textLabel=" CREER UN MOT DE PASSE" />
            <Row>
                <Col id="left">
                   <a href="#elprofa.com">Mot de passe oublié ?</a>
                </Col>
                <Col id="right">
                    <Bouton texte="S'INSCRIRE'" backgroundColor="#007bff" />
                </Col>
            </Row>
        </Form>
    </FormRegisterStc>
  )
};

export default FormRegister;