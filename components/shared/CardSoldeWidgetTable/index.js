import CardSoldeWidgetTableStc from "./CardSoldeWidgetTable.stc";
import { FaUserFriends } from "react-icons/fa";
import { Row, Col, Table } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
import { BsCheckCircle } from "react-icons/bs";
import { BsPencilSquare, BsEye, BsFillTrashFill } from "react-icons/bs";

import { useTable } from "react-table";
import React, { Component, Fragment } from "react";
import Datatable from "react-bs-datatable";

import moment from "moment";
import useForm from "../../../lib/useForm";
import DeleteModal from "../deleteModal";

export const LISTE_TRANSACTION = gql`
  query {
    transactions(sort: "id:desc") {
      id
      sent
      received
      modalite
      total
      paid
      fees
      from
      to
    }
  }
`;

const CardSoldeWidgetTable = () => {
  const { data, error, loading } = useQuery(LISTE_TRANSACTION);

  const header = [
    {
      title: "Montant envoyé",
      prop: "montant_envoye",
      sortable: true,
      filterable: true,
    },
    { title: "Frais airtel money", prop: "frais_airtel_money" },
    { title: "Montant reçu", prop: "montant_recu" },
    { title: "Frais envoi", prop: "frais", sortable: true, filterable: true },
    { title: "Frais en Dh", prop: "frais_dh" },
    { title: "Action ", prop: "action" },
  ];

  // Randomize data of the table columns.
  // Note that the fields are all using the `prop` field of the headers.

  let body = [];

  var i;
  if (data !== "undefined") {
    for (i = 0; i < data?.transactions?.length; i++) {
      var id = data?.transactions[i]?.id;
      body.push({
        montant_envoye:
          data.transactions[i].sent + " " + data.transactions[i].from,
        montant_recu:
          data.transactions[i].received + " " + data.transactions[i].to,
        frais: data.transactions[i].fees + " " + data.transactions[i].from,
        frais_dh:
          data.transactions[i].quatreVingtFraisDh +
          " " +
          data.transactions[i].to,
        frais_airtel_money:
          data.transactions[i].otherFees + " " + data.transactions[i].to,
        action: (
          <div className="iconAction">
            <span>
              <Link href={"/transaction/" + data?.transactions[i]?.id}>
                <a>
                  <BsEye />
                </a>
              </Link>
            </span>
          </div>
        ),
      });
    }
  }

  const onSortFunction = {
    date(columnValue) {
      // Convert the string date format to UTC timestamp
      // So the table could sort it by number instead of by string
      return moment(columnValue, "Do MMMM YYYY").valueOf();
    },
  };

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Erreur</p>;
  }

  return (
    <CardSoldeWidgetTableStc>
      <h2 className="cardTitre">Soldes </h2>
      <Row className="cardActiviteHead">
        <Col md={10} className="dataTable">
          <Datatable
            tableHeaders={header}
            tableBody={body}
            rowsPerPage={10}
            rowsPerPageOption={[10, 20, 30, 40]}
            initialSort={
              ({ prop: "client", isAscending: true }, { prop: "created_at" })
            }
            onSort={onSortFunction}
          />
        </Col>
      </Row>
    </CardSoldeWidgetTableStc>
  );
};
export default CardSoldeWidgetTable;
