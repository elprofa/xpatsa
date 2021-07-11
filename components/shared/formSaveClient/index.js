import FormSaveClientStc from "./formSaveClient.stc";
import { FaUserFriends } from "react-icons/fa";
import { Row, Col, Table, Alert } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Bouton from "../Bouton/Bouton";
import { gql, useQuery, useMutation } from "@apollo/client";
import useForm from "../../../lib/useForm";
import { LISTE_CLIENT_BOX } from "../CardCountClientWidget";
import { LISTE_CLIENT } from "../CardClientWidgetTable";
import { useState } from "react";

const CREATE_CLIENT = gql`
  mutation CREATE_CLIENT(
    $firstname: String!
    $name: String!
    $country: String!
    $ville: String!
    $telephone: String!
  ) {
    createClient(
      input: {
        data: {
          name: $name
          firstname: $firstname
          telephone: $telephone
          country: $country
          ville: $ville
        }
      }
    ) {
      client {
        name
      }
    }
  }
`;

function FormSaveClient() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    firstname: "",
    name: "",
    country: "",
    ville: "",
    telephone: "",
  });

  // const {data,error,loading}=useQuery(CLIENT_MUTATION);

  const [create, { data, error, loading }] = useMutation(CREATE_CLIENT, {
    variables: inputs,
    refetchQueries: [{ query: LISTE_CLIENT_BOX }, { query: LISTE_CLIENT }],
  });

  const test = async (e) => {
    e.preventDefault();

    if (
      inputs.firstname.trim() != "" &&
      inputs.name.trim() != "" &&
      inputs.country.trim() != "" &&
      inputs.telephone.trim() != "" &&
      inputs.ville.trim() != ""
    ) {
      const res = await create();
      console.log(res);
      resetForm();
    } else {
      alert("Erreur! Veuillez saisir tous les champs svp.");
    }
  };

  var response = "";

  if (loading) {
    response = <Image src="/img/load.gif" width="150" height="150" />;
  }
  if (error) {
    console.log(error);
    response = (
      <Alert color="danger">
        Une erreur critique! Veuillez consulter votre administrateur
      </Alert>
    );
  }
  return (
    <FormSaveClientStc>
      <h2 className="cardTitre">Enregistrement d'un client</h2>
      <Row className="cardActiviteHead">
        <div id="divResponseFormSaveClient" className="response">
          {response}
        </div>

        <form onSubmit={test}>
          <Row>
            <Col lg={6}>
              <div className="form-group">
                <label>Prénom (s)</label>
                <input
                  type="texte"
                  required
                  value={inputs.firstname}
                  onChange={handleChange}
                  name="firstname"
                  placeholder="Prenom complet"
                  className="form-control"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="form-group">
                <label>Nom (s)</label>
                <input
                  type="texte"
                  required
                  name="name"
                  placeholder="Nom complet"
                  value={inputs.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="form-group">
                <label>Pays de residence</label>
                <input
                  type="texte"
                  required
                  name="country"
                  placeholder="votre pays de residence"
                  value={inputs.country}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="form-group">
                <label>Ville de residence</label>
                <input
                  type="texte"
                  required
                  name="ville"
                  placeholder="votre ville de residence"
                  value={inputs.ville}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="form-group">
                <label>Téléphone</label>
                <input
                  type="texte"
                  name="telephone"
                  required
                  value={inputs.telephone}
                  onChange={handleChange}
                  placeholder="(+---) -- -- -- --"
                  className="form-control"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Bouton
                taille="15px"
                type="submit"
                minwidth="150px"
                backgroundcolor="#2362bf"
                texte="Enregistrer"
              />
            </Col>
          </Row>
        </form>
      </Row>
    </FormSaveClientStc>
  );
}
export default FormSaveClient;
