import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Form, FormGroup, Label, Input,Card } from "reactstrap";
import { ListGroup, ListGroupItem } from 'reactstrap';
import TableauTeamStc from "./tableauTeam.stc";

const TableauTeam = (props) => {
  return (
    <TableauTeamStc>
      <Container>
        <ListGroup flush>
          <ListGroupItem disabled tag="a" href="#">Team List</ListGroupItem>
          <ListGroupItem tag="a" href="#">Alassan Ouatara</ListGroupItem>
          <ListGroupItem tag="a" href="#">Didier Drogba</ListGroupItem>
          <ListGroupItem tag="a" href="#">Joe Biden</ListGroupItem>
          <ListGroupItem tag="a" href="#">Ndong Mboula</ListGroupItem>
          <ListGroupItem tag="a" href="#">Serge Akassaga</ListGroupItem>
          <ListGroupItem tag="a" href="#">Rose Francine</ListGroupItem>
          <ListGroupItem tag="a" href="#">Miroslav Close</ListGroupItem>
          <ListGroupItem tag="a" href="#">Alison Becker</ListGroupItem>
        </ListGroup>
      </Container>
    </TableauTeamStc>
  );

}

export default TableauTeam;