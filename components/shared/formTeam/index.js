import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Form, FormGroup, Label, Input,Card } from "reactstrap";
import FormTeamStc from './formTeam.stc';
import Titre from "../Titre/Titre";
import InputGroup from "../inputGroup";
import Bouton from "../Bouton/Bouton";

const FormTeam = (props) => {
  const { texte, backgroundColor, color, icon } = props;

  return (
    <FormTeamStc>
      
        <Titre texte="Team " color="#007bff" />
        <p>
          Pour ajouter un membre à l'équipe, remplissez le formulaire ci dessous.
        </p>
        <Card>
        <Form>
          <Row>
            <Col lg={6}>
              <InputGroup textLabel="NOM" />
              <InputGroup textLabel="TELEPHONE" />
            </Col>

            <Col lg={6}>
              <InputGroup textLabel="PRENOM" />
              <InputGroup textLabel="E-MAIL" />
            </Col>

            <Col lg={6}>
                <FormGroup>
                    <legend className="col-form-label col-sm-2">SEX</legend>
                    <FormGroup check>
                        <Input type="radio" name="radio2" id="radio2-option1" />
                        <Label check for="radio2-option1">
                            MASCULIN
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="radio" name="radio2" id="radio2-option2" />
                        <Label check for="radio2-option2">
                            FEMININ
                        </Label>
                    </FormGroup>
                </FormGroup>
            </Col>

            <Col lg={6}>
              <InputGroup typeInput="date"  textLabel="Né le" />
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <InputGroup typeInput="textarea" className="textareaContact" textLabel="DETAILS, FONCTIONS, TACHES" />
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Bouton texte=" AJOUTER  MEMBRE" icon="true" backgroundColor="#007bff" />
            </Col>
          </Row>
        </Form>
      </Card>
    </FormTeamStc>
  );
};

export default FormTeam;