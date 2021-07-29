import CardClientWidgetTableStc from "./CardCircleWidgetTable.stc";
import { FaUserFriends } from "react-icons/fa";
import { Row, Col, Table } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { BsCheckCircle } from "react-icons/bs";
import { BsPencilSquare, BsEye } from "react-icons/bs";

import { useTable } from "react-table";
import React, { Component, Fragment } from "react";
import Datatable from "react-bs-datatable";

import moment from "moment";
import DeleteModalClient from "../DeleteModalClient";

export const LISTE_CLIENT = gql`
  query {
    clients(sort: "id:desc") {
      id
      name
      firstname
      country
      telephone
      ville
      created_at
    }
  }
`;

const CardClientWidgetTable = (props) => {
  const { data, error, loading } = useQuery(LISTE_CLIENT);
  const header = [
    { title: "Nom", prop: "name", sortable: true, filterable: true },
    { title: "Prénom", prop: "firstname", sortable: true, filterable: true },
    { title: "Téléphone", prop: "telephone" },
    { title: "Pays", prop: "country" },
    { title: "ville", prop: "ville" },
    { title: "Créé le", prop: "created_at" },
    { title: "Action", prop: "action" },
  ];

  // Randomize data of the table columns.
  // Note that the fields are all using the `prop` field of the headers.

  let body = [];

  var i;
  if (data !== "undefined") {
    for (i = 0; i < data?.clients?.length; i++) {
      const id_client = data.clients[i]?.id;
      body.push({
        name: data.clients[i]?.name,
        firstname: data.clients[i]?.firstname,
        telephone: data.clients[i].telephone,
        country: data.clients[i].country,
        ville: data.clients[i].ville,
        created_at: data.clients[i].created_at,
        action: (
          <div className="iconAction">
            {console.log(data)}
            {console.log(props)}
            <span>
              <Link href={"/client/update/" + data?.clients[i]?.id}>
                <a>
                  <BsPencilSquare />
                </a>
              </Link>
            </span>
            <span>
              <Link href={"/client/" + data?.clients[i]?.id}>
                <a>
                  <BsEye />
                </a>
              </Link>
            </span>
            <DeleteModalClient id_client={id_client} />
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
    <CardClientWidgetTableStc>
      <h2 className="cardTitre">Clients</h2>
      <Row className="cardActiviteHead">
        <Col lg={12} className="dataTable">
          <Datatable
            tableHeaders={header}
            tableBody={body}
            rowsPerPage={10}
            rowsPerPageOption={[5, 10, 15, 20]}
            initialSort={{ prop: "name", isAscending: true }}
            onSort={onSortFunction}
          />
        </Col>
      </Row>
    </CardClientWidgetTableStc>
  );
};
export default CardClientWidgetTable;
