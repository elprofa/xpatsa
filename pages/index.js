import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { Form, Container, Row, Col } from "reactstrap";

import { initializeApollo } from "../apollo/client";

import PiedDePage from "../components/footer";
import FormLogin from "../components/shared/formLogin/formLogin";
import ComponentBlockDevise from "../components/shared/ComponentBlockDevise/ComponentBlockDevise";

import CommentCaFonctionne from "../components/shared/CommentCaFonctionne/CommentCaFonctionne";

import ImageAccueil from "../components/shared/ImageAccueil/ImageAccueil";

const ViewerQuery = gql `
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`;

const Index = () => {
  const {
    data: { viewer },
  } = useQuery(ViewerQuery);

  const Wrapper = styled.section`
    background:#fff;
    
    .row
    {
        margin:0px;
        @media (min-width: 960px) {
          margin-top:-200px
        }
    }
    
    h1
    {
      top:0;
      text-align:left;
    }
`;

  return (
    <div>
      <Wrapper >
        <Row>
            <Col sm={12} id="colAccueilLeft">
                <ImageAccueil picture='/img/accueil-pic1.jpg' page="home" heightMobile="25vh" heightTablette="55vh" heightDesktop="122vh"/>
            </Col>
        </Row>
      </Wrapper>
     
    <ComponentBlockDevise />
    <CommentCaFonctionne />
     
      <Container>
        <Row>
          <Col>
            You're signed in as {viewer.name} anxd you're wedo {viewer.status}{" "}
            goto{" "}
            <Link href="/connexion">
              <a>static</a>
            </Link>{" "}
            page.
          </Col>
          <Col></Col>
        </Row>
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
