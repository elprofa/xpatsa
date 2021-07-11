import CardTransactionWidgetTableStc from "./CardTransactionWidgetTable.stc";
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
      client {
        id
        firstname
        name
      }
      id
      sent
      received
      modalite
      total
      paid
      from
      to
      created_at
    }
  }
`;

const CardTransactionWidgetTable = () => {
  const { data, error, loading } = useQuery(LISTE_TRANSACTION);

  const header = [
    { title: "Client", prop: "client", sortable: true, filterable: true },
    { title: "A envoyer", prop: "sent", sortable: true, filterable: true },
    { title: "A recevoir", prop: "received" },
    { title: "Modalité", prop: "modalite", sortable: true, filterable: true },
    { title: "Coût total", prop: "total" },
    { title: "Payé ?", prop: "paid" },
    { title: "Crééé le", prop: "created_at", sortable: true, filterable: true },
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
        client: (
          <Link href={"/client/" + data?.transactions[i]?.client?.id}>
            <a>{data.transactions[i]?.client?.firstname}</a>
          </Link>
        ),
        sent: data.transactions[i].sent + " " + data.transactions[i].from,
        received: data.transactions[i].received + " " + data.transactions[i].to,
        modalite: data.transactions[i].modalite,
        total: data.transactions[i].total + " " + data.transactions[i].from,
        paid: data?.transactions[i]?.paid ? (
          <span className="yes">
            <BsCheckCircle />
          </span>
        ) : (
          <span className="no">-</span>
        ),
        created_at: data.transactions[i].created_at,
        action: (
          <div className="iconAction">
            <span>
              <Link href={"/transaction/update/" + data?.transactions[i]?.id}>
                <a>
                  <BsPencilSquare />
                </a>
              </Link>
            </span>
            <span>
              <Link href={"/transaction/" + data?.transactions[i]?.id}>
                <a>
                  <BsEye />
                </a>
              </Link>
            </span>
            <DeleteModal id_transaction={id} />
          </div>
        ),
      });
    }
  }

  console.log(body);

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

  console.log(data.transactions);
  return (
    <CardTransactionWidgetTableStc>
      <h2 className="cardTitre">
        Transactions{" "}
        <Link href="/soldes">
          <a>
            <span className="spanTableSolde">(Afficher en mode solde)</span>
          </a>
        </Link>
      </h2>
      <Row className="cardActiviteHead">
        <Col lg={12} className="dataTable">
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
    </CardTransactionWidgetTableStc>
  );
};
export default CardTransactionWidgetTable;
