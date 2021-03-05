import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Titre from "../Titre/Titre";
import Bouton from "../Bouton/Bouton";
import Image from "next/image";
import Link from 'next/link';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "/img/slide6.jpg",
    titre:"Aide aux etudiants",
    altText: "Slide 1",
    caption: "XPATSA vous offre la possiblité d'effectuer vos transactions finacières "+
    "en toute sécurité et accésible à toutes les bourses."+
    "Nous simplifions au maximum votre transaction. Seul les éléments rélatifs "+
    "à l'aspect sécurité de la transaction vous seront demandés pour une "+
    "experience utilisateur optimale.",
  },
  {
    src: "/img/slide7.jpg",
    altText: "Slide 2",
    titre:"Aides médicales",
    caption: "Quand on parle de santé, il ne faut négliger aucun aspect. XPATSA met "+
    "à votre disposition un service rapide tout au long de votre séjour "+
    "médicale ou celui de l'un de vos proches.",
  },
  {
    src: "/img/slide8.jpg",
    altText: "Slide 3",
    titre:"Aide pour VISA et Carte de séjours",
    caption: "XPATSA vous facilite les démarches dans l'obtention de votre VISA et votre titre de séjours."+
    "Il ne vous reste qu'à nous contacter pour vivre une merveilleuse expérience",
  },
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />

        <Container className="containerHome d-none d-lg-block ">
          <Row>
            <Col sm={6} className="colAccueilLeft">
              <Titre texte={item.titre} underline="2" color="#fff" />
              <p>
               {item.caption}
              </p>
              <Link href="contact">
                <a>
                    <Bouton
                      texte="COMMENCEZ"
                      icon="true"
                      color="#fff"
                      backgroundcolor="#007bff"
                    />
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Example;
