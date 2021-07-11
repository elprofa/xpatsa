import React, { useContext } from "react";
import { Col, Row, Form, Input } from "reactstrap";
import Select from "react-select";

import { useState } from "react";
import PersonalInfoStc from "./FormPersonalInfo.stc";
import TestContext from "../../ContextAPI/TestContext";

// import {TransactionContext} from "../../ContextAPI/TransactionContext"

const ChoixDuPays = (props) => {
  const {
    TrUpdatePaysDestinataire,
    TrUpdatePaysOrigine,
    TrUpdateCurrFrom,
    TrUpdateCurrTo,
  } = useContext(TestContext);

  const countryOrigineChoosed = (event) => {
    TrUpdatePaysOrigine(event.label);
    TrUpdateCurrFrom(event.value);
  };
  const countryDestinataireChoosed = (event) => {
    TrUpdatePaysDestinataire(event.label);
    TrUpdateCurrTo(event.value);
  };

  const options = [
    { value: "XAF", label: "Gabon" },
    { value: "MAD", label: "Maroc" },
    { value: "ZAR", label: "Afrique du Sud" },
  ];

  return (
    <PersonalInfoStc>
      <Form>
        <Row form>
          <Col
            lg={12}
            className="d-flex flex-wrap justify-content-center mt-3 w-100"
          >
            <div className="divInput">
              <label>Pays expéditeur</label>
              <Select options={options} onChange={countryOrigineChoosed} />
            </div>

            <div className="divInput">
              <label>Pays destinataire</label>
              <Select options={options} onChange={countryDestinataireChoosed} />
            </div>
          </Col>
        </Row>
      </Form>
    </PersonalInfoStc>
  );
};

export default ChoixDuPays;
