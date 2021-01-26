import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Titre from "../Titre/Titre";
import Bouton from "../Bouton/Bouton";
import ImageAccueilStc from "./ImageAccueil.stc";
import Image from "next/image";
import { Form, Container, Row, Col } from "reactstrap";
import { BsChevronDoubleDown } from "react-icons/bs";

const ImageAccueil = (props) => {
  const { picture, page, heightDesktop, heightMobile, heightTablette } = props;
  if (page == "home") {
    return (
      <ImageAccueilStc
        heightDesktop={heightDesktop}
        heightTablette={heightTablette}
        heightMobile={heightMobile}
      >
        <Image src={picture} alt="Picture of computer" layout="fill" />
        <Container className="containerHome d-none d-lg-block ">
          <Row>
            <Col sm={6} className="colAccueilLeft">
              <Titre texte="Aide pour étudiant" underline="true" color="#fff" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis enim adipisci aliquam ut quam incidunt veniam rem,
                recusandae repellat blanditiis corporis vitae, mollitia illum
                eligendi officiis quisquam nesciunt, sequi esse!
              </p>

              <Bouton
                texte="COMMENCEZ"
                icon="true"
                color="#fff"
                backgroundcolor="#007bff"
              />
            </Col>
          </Row>
        </Container>
      </ImageAccueilStc>
    );
  } else {
    return (
      <ImageAccueilStc>
        <Image src={picture} alt="Picture of computer" layout="fill" />
        <Titre texte="Qui sommes-nous ?" color="#fff" />
        <BsChevronDoubleDown />
      </ImageAccueilStc>
    );
  }
};
export default ImageAccueil;
