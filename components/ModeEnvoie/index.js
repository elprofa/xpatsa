import React, { useContext } from "react";
import { Col, Row, Form, ButtonGroup } from "reactstrap";
import Select from "react-select";
import ModeEnvoiStc from "./ModeEnvoi.stc";

import { useState } from "react";

import TestContext from "../../ContextAPI/TestContext";
import { Button } from "bootstrap";

const Example = (props) => {
  const transaction = useContext(TestContext);

  const [rSelected, setRSelected] = useState(null);

  return (
    <ModeEnvoiStc>
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
                value={transaction.TrPaysOrigine}
                disabled
                className="input form-control paysOrigine"
              />
            </div>

            <div className="divInput divInputValider">
              <label>Pays destinataire</label>
              <input
                type="texte"
                disabled
                value={transaction.TrPaysDestinataire}
                className="input form-control paysDestinataire"
              />
            </div>
          </Col>
        </Row>
        <Row form className="my-5">
          <Col lg={12} className="d-flex flex-wrap justify-content-center w-50">
            <div className="divInput">
              <label>
                Comment voulez-vous qu'on procède au calcul de votre transaction
                ?
              </label>
              <h5>Radio Buttons</h5>
              <ButtonGroup>
                <Button
                  color="primary"
                  onClick={() => setRSelected(1)}
                  active={rSelected === 1}~
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
            </div>
          </Col>
        </Row>
      </Form>
    </ModeEnvoiStc>
  );
};

export default Example;
