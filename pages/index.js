import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Caroussel from "../components/shared/caroussel/caroussel";

import { initializeApollo } from "../apollo/client";
import ComponentBlockDevise from "../components/shared/ComponentBlockDevise/ComponentBlockDevise";
import CommentCaFonctionne from "../components/shared/CommentCaFonctionne/CommentCaFonctionne";
import GrilleComponentPays from '../components/shared/PaysDispo';
import { Container, Button, Row, Col } from 'reactstrap';
import FormContact from '../components/shared/formContact';
import NewsLater from '../components/shared/Newlater';


const ViewerQuery = gql `
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`;

const Index = (props) => {
  const {
    data: { viewer },
  } = useQuery(ViewerQuery);

  const Wrapper = styled.section`
    background:#ececec;
    img
    {
      width:100%;
    }
    .slide
    {
      margin-top:0px;
      @media (min-width: 991px) {
        margin-top:-150px;
      }
    }

    .containerHome
    {
      position: absolute;
      top: 45%;
      left: 0;
      right: 0;
    }
    .colAccueilLeft.col-sm-6 {
        background: rgb(0,0,0,.5);
        padding: 30px;
        color: #fff;
    }

    .carousel-control-next, .carousel-control-prev
    {
      width:2% !important;
    }
    .coontainerContact .card 
    {
      padding:40px;
    }

    .coontainerContact .colContact
    {
      @media (max-width: 476px) {
        padding:0px !important;
      }
    }
`;

  return (
    <div>
      <Wrapper >
        <Caroussel />
      </Wrapper>

      <ComponentBlockDevise />
      <CommentCaFonctionne />
      <Container>
          <Row>
              <Col>
                  <GrilleComponentPays/>
              </Col>
          </Row>
      </Container>
      <Wrapper >
        <Container className="coontainerContact">
            <Row>
                <Col lg={12} className="colContact">
                  <FormContact/>
                </Col>
            </Row>
        </Container>
      </Wrapper>
      <Container>
          <NewsLater 
              position="right" 
              texteTitre="Newsletter"
              colorTitre="#007bff"
              paragraphe="Recevez votre newsletters en vous inscrivant ici." 
          />
      </Container>
      

    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ViewerQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
