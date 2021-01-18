import React from "react";
import { RangerFooter } from "./footer.stc";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import {
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
  Container,
} from "reactstrap";
import DropDownInput from "../shared/dropDownInput/dropDownInput";
import Link from "next/link";

import { BiMobileAlt } from "react-icons/bi";

const PiedDePage = (props) => {
  return (
    <RangerFooter>
      <Container>
        <Row className="">
          <Col sm={2} className="">
            <DropDownInput
              OptionList={[
                { item: "FRANCAIS", value: "fr" },
                { item: "ENGLISH", value: "en" },
              ]}
            />
          </Col>
          <Col sm={6} className="d-none d-md-block">
            <ListGroup horizontal>
              <Link href="/transfert">
                <ListGroupItem tag="a" href="/transfert">
                  Transfert d'argent
                </ListGroupItem>
              </Link>
              <Link href="/apropos">
                <ListGroupItem tag="a" href="/apropos">
                  A propos
                </ListGroupItem>
              </Link>
              <Link href="/contact">
                <ListGroupItem tag="a" href="/contact">
                  Contact
                </ListGroupItem>
              </Link>
              <Link href="/inscription">
                <ListGroupItem tag="a" href="/inscription">
                  S'inscrire
                </ListGroupItem>
              </Link>
            </ListGroup>
          </Col>
          <Col sm={4} className="">
            Suiver-nous sur:
            <FaFacebookSquare size={25} className="mx-2" />
            <FaTwitterSquare size={25} className="mr-2" />
            <FaLinkedin size={25} />
          </Col>
        </Row>
        <Row className="">
          <Col sm={6} className="">
            {" "}
            <BiMobileAlt /> Maroc: 077.44.42.39 / Afrique du Sud : 074.13.08.94
          </Col>
          <Col sm={6} className="">
            {" "}
            © Copyright 2021 - XPATSA - Tous droits réservés
          </Col>
        </Row>
      </Container>
    </RangerFooter>
  );
};

export default PiedDePage;
