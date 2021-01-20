import React, { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import Titre from "../Titre/Titre";
import Bouton from "../Bouton/Bouton";
import Image from 'next/image';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/img/slide3.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: '/img/slide2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: '/img/slide1.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        
        <Container className="containerHome d-none d-lg-block ">
              <Row >
                <Col sm={6} className="colAccueilLeft">
                  <Titre texte="Aide pour étudiant" underline="2" color="#fff" underline="true" />
                  <p >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Facilis enim adipisci aliquam ut quam incidunt veniam rem,
                   recusandae repellat blanditiis corporis vitae, mollitia illum eligendi 
                   officiis quisquam nesciunt, sequi esse!
                  </p>
                  <Bouton texte="COMMENCEZ" icon="true" color="#fff" backgroundColor="#007bff"/>
                </Col>
              </Row>
          </Container>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;