import React from "react";
import { useRouter } from "next/router";

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
import DropDownInput from "../shared/dropDownInput";
import Link from "next/link";

import { BiMobileAlt } from "react-icons/bi";


const PiedDePage = (props) => {

  const router = useRouter();

  if(router.pathname !="/dashboard" && router.pathname !="/transaction" && router.pathname !="/client" 
  && router.pathname !="/analyse" && router.pathname !="/setting")
  {
  
  return (
    <RangerFooter>
      <Container>
        <Row className="firstLine">
          <Col lg={2} className="smLeft">
            <DropDownInput
              OptionList={[
                { item: "FRANCAIS", value: "fr" },
                { item: "ENGLISH", value: "en" },
              ]}
            />
          </Col>
          <Col lg={6} className="d-none d-md-block menuFooter">
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
          <Col lg={4} className="smRight">
            <ListGroup>
              <ListGroupItem className="socialMediaUl">
                <span>Suiver-nous sur:</span>
                <FaFacebookSquare size={25} className="mx-2" />
                <FaTwitterSquare size={25} className="mr-2" />
                <FaLinkedin size={25} />
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row className="lastLine">
          <Col sm={6} className="smLeft1">
            {" "}
            <BiMobileAlt /> Maroc: 077.44.42.39 / Afrique du Sud : 074.13.08.94
          </Col>
          <Col sm={6} className="smRight1">
            {" "}
            © Copyright 2021 - XPATSA - Tous droits réservés
          </Col>
        </Row>
      </Container>
    </RangerFooter>
  );
  }
  else
  {
    return <></>
  }
};

export default PiedDePage;
